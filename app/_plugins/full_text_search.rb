module Jekyll
  module FullTextSearchFilter

    def full_text_search(input)
      sanitized = input.gsub!(/[^0-9a-z\'’\s]/, '').gsub! "’", "''"
      words = sanitized.split(" ")
      words.join(" ")
    end

  end

  class MultiSet
    attr_accessor :set
    def initialize(set)
      @set = set
    end
    # intersection
    def &(other)
      @set & other.set
    end
    # difference
    def -(other)
      @set - other.set
    end
    # union
    def |(other)
      @set | other.set
    end
  end
end

Liquid::Template.register_filter(Jekyll::FullTextSearchFilter)
