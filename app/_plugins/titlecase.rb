module Jekyll
  module TilteCaseFilter

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
      exclusions = ['a', 'am', 'be', 'em', 'my', 'to', 'but', 'the', 'yet']
      any = exclusions.any?{ |s| s == word }
      !any
    end

    def capitalize(word)
      done = false
      word.gsub!(/[^"]/) { |w|
        if !done
          done = true
          w.capitalize
        else
          w
        end
      }
      word
    end

  end
end

Liquid::Template.register_filter(Jekyll::TilteCaseFilter)
