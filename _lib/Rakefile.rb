require 'lingua'
require 'find'

task :readability do

  # Create a simple function to do this
  def calculate_score(text)
    # Remove the frontmatter, and codeblocks, because this will impact the score
    frontmatter = /(---)((?:(?:\r?\n)+(?:\w|\s).*)+\r?\n)(?=---\r?\n)(.*?)/x
    fenced_code = /`{3}(?:(.*$)\n)?([\s\S]*)`{3}/mx
    nested_code = /((?:^(?:[ ]{4}|\t).*$(?:\r?\n|\z))+)/x

    parsed = text.gsub(frontmatter, "#{$3}").gsub(fenced_code, "").gsub(nested_code, "")
    score = Lingua::EN::Readability.new( parsed ).flesch
    if score > 100
      return score, "an", "Elementary Schooler"
    elsif score.between?(80,100)
      return score, "a", "Middle Schooler"
    elsif score.between?(50,80)
      return score, "a", "High Schooler"
    elsif score.between?(30,50)
      return score, "an", "Average Adult"
    elsif score.between?(0,30)
      return score, "a", "College Level Student"
    else
      return score, "a", "PhD Academic"
    end
  end

  require 'stringio'
  def add_flesch_score_to_post(post, score, level)
    content_stream = StringIO.open
    line_target = 1
    line_counter = 0

    File.readlines(post).each do |line|
      if line_counter == line_target
        content_stream << "flesch-score: #{score.round(2)}\n"
        content_stream << "flesch-level: #{level}\n"
      end
      if !line.include? "flesch"
        content_stream << line
      end
      line_counter += 1
    end
    content_stream.seek 0
    File.open(post, "wb").write content_stream.read
  end

  # Get all posts in ./_posts
  Find.find("../_posts/") do |post|
    if File.file?(post)
      score, article, level = calculate_score(File.read(post))
      puts "#{post} has a score of #{score}, which is suitable for #{article} #{level}"
      add_flesch_score_to_post(post, score, level)
    end
  end
end
