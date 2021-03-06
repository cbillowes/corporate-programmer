module Jekyll
  module TitleCaseFilter

    def titlecase(input)
      input.gsub(/\S+/) do |word|

        if should_capitalize_word(word)
          capitalize(word)
        else
          word
        end
      end
    end

    def should_capitalize_word(word)
      exclusions = get_exclusions()
      any = exclusions.any?{ |s| s == word }
      !any
    end

    def capitalize(word)
      done = false
      isHyphen = false
      word.gsub!(/[^"]/) { |w|
        isHyphen = isHyphen || w == "-"
        if !done
          done = true
          w.capitalize
        elsif isHyphen
          isHyphen = w == "-"
          w.capitalize
        else
          w
        end
      }
      word
    end

    def get_exclusions()
      exclusions = [
        'a',
        'am',
        'an',
        'be',
        'but',
        'do',
        'em',
        "got",
        'my',
        'in',
        'is',
        'it',
        'of',
        'our',
        'that',
        'this',
        'the',
        'to',
        'with',
        'yet',
      ]
      exclusions
    end

  end
end

Liquid::Template.register_filter(Jekyll::TitleCaseFilter)
