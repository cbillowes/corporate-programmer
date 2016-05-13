module Jekyll
  module StripNewLinesWithSpacesFilter

    def strip_newlines_with_spaces(input)
      input.gsub("\n", " ")
    end

  end
end

Liquid::Template.register_filter(Jekyll::StripNewLinesWithSpacesFilter)
