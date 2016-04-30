# Corporate Programmer

**Theme**: Survival guide for corporate development especially for software developers entering from small to medium businesses.

**Topics board**: https://trello.com/b/IiVLRz8F/blog-surviving-corporates

### Getting started

* [npm](https://www.npmjs.com/) (Node Package Manager)
* [Ruby](https://www.ruby-lang.org/)
* [Jekyll](https://jekyllrb.com/) v3.1.3 - [Tips](http://jekyll.tips/)
* [Grunt](http://gruntjs.com/getting-started)
* [live-server](https://github.com/tapio/live-server)
* [lingua](https://github.com/dbalatero/lingua) - `gem install 'lingua'`
* [ImageMagick](http://www.imagemagick.org/script/binary-releases.php) - Install binary and make sure its in system path. Not sure if [node wrapper](https://www.npmjs.com/package/imagemagick) is needed: `npm install imagemagick`.

You know what would be great? Having this configured in a
[Docker](https://www.docker.com/) image! o_O

### Grunt build automation

Update dependencies with `npm-check-updates`. Install
`npm install -g npm-check-updates` and run it with `npm-check-updates -u`.
This command will update all dependencies to the latest versions.

Remove unused packages from `node_modules` by executing `npm prune` in the root
folder.

#### Dependencies

* [time-grunt](https://github.com/sindresorhus/time-grunt) - Display the elapsed execution time of grunt tasks.
* [jit-grunt](https://github.com/shootaroo/jit-grunt) - JIT(Just In Time) plugin loader for Grunt.
* [grunt-build-control](https://github.com/robwierzbowski/grunt-build-control) - Version control your built code.
* [grunt-autoprefixer](https://github.com/nDmitry/grunt-autoprefixer) - Parse CSS and add vendor-prefixed CSS properties using the Can I Use database. Based on Autoprefixer.
* [grunt-contrib-clean](https://github.com/gruntjs/grunt-contrib-clean) - Clear files and folders.
* [grunt-contrib-connect](https://github.com/gruntjs/grunt-contrib-connect) - Start a connect web server.
* [grunt-contrib-copy](https://github.com/gruntjs/grunt-contrib-copy) - Copy files and folders
* [grunt-contrib-cssmin](https://github.com/gruntjs/grunt-contrib-cssmin) - Minify CSS.
* [grunt-contrib-htmlmin](https://github.com/gruntjs/grunt-contrib-htmlmin) - Minify HTML.
* [grunt-contrib-imagemin](https://github.com/gruntjs/grunt-contrib-imagemin) - Minify images.
* [grunt-svgmin](https://github.com/sindresorhus/grunt-svgmin) - Minify SVG.
* [grunt-contrib-sass](https://github.com/gruntjs/grunt-contrib-sass) - Compile Sass to CSS.
* [grunt-contrib-uglify](https://github.com/gruntjs/grunt-contrib-uglify) - Minify files with UglifyJS.
* [grunt-contrib-watch](https://github.com/gruntjs/grunt-contrib-watch) - Run tasks whenever watched files change.
* [grunt-critical](https://github.com/bezoerb/grunt-critical) - Grunt task to extract & inline critical-path CSS from HTML.
* [grunt-jekyll](https://github.com/dannygarcia/grunt-jekyll) - Straightforward grunt.js Jekyll plugin.
* [grunt-uncss](https://github.com/addyosmani/grunt-uncss) - A grunt task for removing unused CSS from your projects.
* [grunt-shell](https://github.com/sindresorhus/grunt-shell) - Run shell commands
* [grunt-responsive-images](https://github.com/andismith/grunt-responsive-images/) - Produce images at different sizes for responsive websites. Using the picture element with [grunt responsive images](http://www.andismith.com/grunt-responsive-images/).
* [bootstrap-sass](https://github.com/twbs/bootstrap-sass) - Official Sass port of Bootstrap 2 and 3.

#### Development

Run `grunt serve` or `grunt`

* calculate and save Flesch-Kincaid score and level to all posts;
* make Jekyll magic and compile your site to `.jekyll` folder;
* create different versions of responsive images for post `.jpg` files;
* compile `.scss` files and autoprefix them;
* compile `.js` files;
* start a web server for you;
* watch your files and run Grunt tasks when they are needed.

#### Deploy

Run `grunt deploy`

* make Jekyll magic and compile your site to `.jekyll` folder;
* compress all images in `img` folder;
* compile `.sass` files, delete unnecessary css styles, autoprefix and compress them;
* compile and compress `.js` files;
* generate and insert critical css into pages;
* compress `.html` pages;
* bump version and tag branch with latest version. TODO

#### Flesch-Kincaid calculation

This is part of the build automation. The score (0 - 100) and level
(PhD Academic, College Level Student, Average Adult, High Schooler,
Middle Schooler and Elementary Schooler) is added to each post on build.

The writing should aim to be [easy to read](https://contently.com/strategist/2015/01/28/this-surprising-reading-level-analysis-will-change-the-way-you-write/)
but interesting to follow. Optimize for a score between [60 - 70](http://www.vervesearch.com/blog/how-to-optimise-your-content-for-success-with-the-flesch-kincaid-scale-readability-statistics/).

Run readability score manually using rake:

`cd lib`
`rake readability`

Run readability score manually using grunt:

`grunt shell:readability`

### Search possibilities

There are a few possibilities to implement [Search in Jekyll](http://jekyll.tips/tutorials/search/).
They currently include:

* Client Side Search
* TapirGo
* Google Search

### Contributions

* [Curly Brackets free icon](http://www.flaticon.com/free-icon/curly-brackets_106842)
  by [vaadin](http://www.flaticon.com/authors/vaadin) at [flaticon](http://www.flaticon.com)
  saved as 24x24px in #3E8FB0 - Contribution to author required

* Estimated read time calculation courtesy of [Carlos Alexandro Becker](http://carlosbecker.com/posts/jekyll-reading-time-without-plugins)

* Testing Flesch-Kincaid Readability in Jekyll courtesy of [Mike Mackintosh](https://www.mikemackintosh.com/flesch-readability-in-jekyll/)

* Optimized Jekyll site with grunt thanks to
[Oleh Zasadnyy](http://o.zasadnyy.com/blog/optimized-jekyll-site-with-grunt/)

#### Photos

* [StockSnap.io](https://stocksnap.io) - Beautiful free stock photos
