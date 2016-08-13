module Jekyll

  class  TagsPage < Page
    def initialize(site, base, dir, tags)
      @site = site
      @base = base
      @dir = dir
      @name = 'index.html'

      self.process(@name)
      self.read_yaml(File.join(base, '_layouts'), 'tags.html')
      self.data['title'] = 'Tags'
      self.data['tags'] = tags
    end
  end

  class  TagsPageGenerator < Generator
    safe true

    def generate(site)
      tags = Set.new
      site.posts.docs.each do | post |
        post.data['tags'].each do | tag |
          tags.add?(tag)
        end
      end
      site.pages << TagsPage.new(site, site.source, '/tags/', tags.to_a())
    end
  end

end
