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
      return score, "an Elementary Schooler"
    elsif score.between?(80,100)
      return score, "a Middle Schooler"
    elsif score.between?(50,80)
      return score, "a High Schooler"
    elsif score.between?(30,50)
      return score, "an Average Adult"
    elsif score.between?(0,30)
      return score, "a College Level Student"
    else
      return score, "a PhD Academic"
    end
  end

  # Get all posts in ./_posts
  Find.find("../_posts/") do |post|
    if File.file?(post)
      score, level = calculate_score(File.read(post))
      puts "#{post} has a score of #{score}, which is suitable for #{level}"
    end
  end
end
