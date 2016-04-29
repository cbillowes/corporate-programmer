# Corporate Programmer

**Theme**: Survival guide for corporate development especially for software developers entering from small to medium businesses.

**Topics board**: https://trello.com/b/IiVLRz8F/blog-surviving-corporates

### Getting started

* [npm](https://www.npmjs.com/) (Node Package Manager)
* [Ruby](https://www.ruby-lang.org/)
* [Jekyll](https://jekyllrb.com/) v3.1.3 - [Tips](http://jekyll.tips/)
* [Grunt](http://gruntjs.com/getting-started)
* [live-server](https://github.com/tapio/live-server) - Automatically reloads `_site` directory in your browser
* [lingua](https://github.com/dbalatero/lingua) - `gem install 'lingua'`
* [ImageMagick](http://www.imagemagick.org/script/binary-releases.php) - Install binary and make sure its in system path. Not sure if [node wrapper](https://www.npmjs.com/package/imagemagick) is needed: `npm install imagemagick`.

You know what would be great? Having this configured in a
[Docker](https://www.docker.com/) image! o_O

### Build automation

* [load-grunt-tasks](https://github.com/sindresorhus/load-grunt-tasks) - Load multiple grunt tasks using globbing patterns
* [grunt-shell](https://github.com/sindresorhus/grunt-shell) - Run shell commands
* [grunt-contrib-clean](https://github.com/gruntjs/grunt-contrib-clean) - Clear files and folders
* [grunt-contrib-sass](https://github.com/gruntjs/grunt-contrib-sass) - Compile Sass to CSS
* [grunt-concurrent](https://github.com/sindresorhus/grunt-concurrent) - Run grunt tasks concurrently
* [grunt-contrib-copy](https://github.com/gruntjs/grunt-contrib-copy) - Copy files and folders
* [grunt-contrib-watch](https://github.com/gruntjs/grunt-contrib-watch) - Run predefined tasks whenever watched file patterns are added, changed or deleted
* [grunt-responsive-images](https://github.com/andismith/grunt-responsive-images/) - Produce images at different sizes for responsive websites. Using the picture element with [grunt responsive images](http://www.andismith.com/grunt-responsive-images/).

### Consoles

To develop with ease, it's suggested to have separate console windows open.
A great Windows app is [ComEmu](https://conemu.github.io/). Make sure they
are all open to the current working directory (cwd) of this project.

If you are running a grunt task and are experiencing strange issues, opt in for
verbose messaging by appending `-v` to the command. eg. `grunt default -v`

#### Grunt tasks and other commands

Use this console to run any grunt tasks that you would like.

`grunt build`

#### Watch

This will watch site for changes made and depending on what was changed
automatically execute a Jekyll build task.

`grunt watch` or `grunt default`

#### Live Server

This will serve the site with JavaScript that will automatically refresh
your browser every time a change is detected. No more pesky F5 buttons each time.
You need to run this server on the generated website folder.

`cd _site`
`live-server`

#### Flesch-Kincaid calculation

This is part of the build automation. The score (0 - 100) and level
(PhD Academic, College Level Student, Average Adult, High Schooler,
Middle Schooler and Elementary Schooler) is added to each post on build.

The writing should aim to be [easy to read]
(https://contently.com/strategist/2015/01/28/this-surprising-reading-level-analysis-will-change-the-way-you-write/)
but interesting to follow. Optimize for a score between [60 - 70](http://www.vervesearch.com/blog/how-to-optimise-your-content-for-success-with-the-flesch-kincaid-scale-readability-statistics/).

Run readability score manually using rake:

`cd lib`
`rake readability`

Run readability score manually using grunt:

`grunt shell:readability`

### Search possibilities

There are a few possibilities to implement [Search in Jekyll]
(http://jekyll.tips/tutorials/search/). They currently include:

* Client Side Search
* TapirGo
* Google Search

### Contributions

* [Curly Brackets free icon](http://www.flaticon.com/free-icon/curly-brackets_106842)
  by [vaadin](http://www.flaticon.com/authors/vaadin) at [flaticon](http://www.flaticon.com)
  saved as 24x24px in #3E8FB0 - Contribution to author required

* Estimated read time calculation courtesy of [Carlos Alexandro Becker]
[http://carlosbecker.com/posts/jekyll-reading-time-without-plugins)

* Testing Flesch-Kincaid Readability in Jekyll courtesy of [Mike Mackintosh]
(https://www.mikemackintosh.com/flesch-readability-in-jekyll/)

#### Photos

* (StockSnap.io)[https://stocksnap.io] - Beautiful free stock photos
