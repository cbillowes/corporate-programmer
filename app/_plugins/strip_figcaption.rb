module Jekyll
  module StripFigCaptionFilter

    def strip_figcaption(input)
      input.gsub(/<figcaption.*?<\/figcaption>/m, "")
    end

  end
end

Liquid::Template.register_filter(Jekyll::StripFigCaptionFilter)
