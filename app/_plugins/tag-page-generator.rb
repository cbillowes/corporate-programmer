module Jekyll

  class  TagPage < Page
    def initialize(site, base, dir, tag)
      @site = site
      @base = base
      @dir = dir
      @name = 'index.html'

      self.process(@name)
      self.read_yaml(File.join(base, '_layouts'), 'tag.html')
      self.data['title'] = 'Tagged as ' + tag
      self.data['tag'] = tag
    end
  end

  class  TagPageGenerator < Generator
    safe true

    def generate(site)
      site.posts.docs.each do | post |
        post.data['tags'].each do | tag |
          site.pages << TagPage.new(site, site.source, File.join('/blog/tag/', tag), tag)
        end
      end
    end
  end

end
