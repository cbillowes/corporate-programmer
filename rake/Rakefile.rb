require 'lingua'
require 'find'
require 'stringio'

task :process do
  path = '../app/_process'

  # Create a simple function to do this
  def calculate_flesch_score(content)
    # Remove the frontmatter, and codeblocks, because this will impact the score
    frontmatter = /(---)((?:(?:\r?\n)+(?:\w|\s).*)+\r?\n)(?=---\r?\n)(.*?)/x
    fenced_code = /`{3}(?:(.*$)\n)?([\s\S]*)`{3}/mx
    nested_code = /((?:^(?:[ ]{4}|\t).*$(?:\r?\n|\z))+)/x

    parsed = content.gsub(frontmatter, "#{$3}").gsub(fenced_code, "").gsub(nested_code, "")
    score = Lingua::EN::Readability.new( parsed ).flesch
    if score.nan?
      return "<undetermined>", "", "<undetermind>"
    end

    score = score.round(2)
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

  $timestamp = Time.now
  def process_post(file_name)
    content = File.read(file_name)
    content_stream = StringIO.open
    line_counter = 0
    line_target = 3

    File.readlines(file_name).each do |line|

      if line_counter == line_target
        date = "date:   #{$timestamp}\n"
        content_stream << date
        puts ">> Date: #{$timestamp}"

        score, article, level = calculate_flesch_score(content)
        content_stream << "flesch-score: #{score}\n"
        content_stream << "flesch-level: #{level}\n"
        puts ">> Flesch score: #{score} - suitable for #{article} #{level}"
      end

      if (!line.include? "flesch-") && (!line.include? "date:")
        content_stream << line
      end

      line_counter += 1

    end
    content_stream.seek 0
    File.open(file_name, 'wb') do |f|
      f.write content_stream.read
      puts ">> Update metadata"
    end
  end

  Find.find(path) do |file|
    if File.file?(file)
      puts "> Processing #{File.basename(file)} in #{path}"
      process_post(file)

      filename = File.basename(file, File.extname(file)).gsub(/\d{4}-\d{2}-\d{2}-/, "")
      new_filename = "#{path}/#{$timestamp.strftime("%Y-%m-%d")}-#{filename}#{File.extname(file)}"
      File.rename(file, new_filename)
      puts ">> Rename to #{File.basename(new_filename)}"
    end
  end

end

task :unfrontmatter do
  path = '../credits.md'

  require 'stringio'
  def remove_liquid(file)
    content_stream = StringIO.open
    yaml_inicator_index = 0

    File.readlines(file).each do |line|
      if line[0] == "-"
        yaml_inicator_index += 1
      end

      if yaml_inicator_index > 1

        if yaml_inicator_index == 2
          content_stream << "# Credits\n"
          yaml_inicator_index += 1
        else
          content_stream << line
        end

      end

    end

    content_stream.seek 0
    File.open(file, "wb").write content_stream.read
  end

  remove_liquid(path)
end
