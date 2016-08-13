module Jekyll

  class  TagsPage < Page
    def initialize(site, base, dir, tag, tags)
      @site = site
      @base = base
      @dir = dir
      @name = 'index.html'

      self.process(@name)
      self.read_yaml(File.join(base, '_layouts'), 'tags.html')
      self.data['title'] = 'Tags'
      self.data['tag'] = tag
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
      tags = tags.to_a().sort_by!{ |i| i.downcase }

      tags.each do | tag |
        site.pages << TagsPage.new(site, site.source, File.join('/blog/tag/', tag), tag, tags)
      end

      site.pages << TagsPage.new(site, site.source, '/blog/tag/', 'all', tags)
    end
  end

end
