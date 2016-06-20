module Jekyll
  module FullTextSearchFilter

    def full_text_search(input)
      sanitized = input.gsub(/[^0-9a-z\'’\s]/, '')
      words = sanitized.split(" ")
      words.join(" ")
    end

  end
end

Liquid::Template.register_filter(Jekyll::FullTextSearchFilter)
