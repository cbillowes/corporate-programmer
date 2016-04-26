# Corporate Programmer

**Theme**: Survival guide for corporate development especially for software developers entering from small to medium businesses.

**Topics board**: https://trello.com/b/IiVLRz8F/blog-surviving-corporates

### Getting started

* [npm](https://www.npmjs.com/) (Node Package Manager)
* [Ruby](https://www.ruby-lang.org/)
* [Jekyll](https://jekyllrb.com/) v3.1.3
* [Grunt](http://gruntjs.com/getting-started)
* [live-server](https://github.com/tapio/live-server) - Automatically reloads `_site` directory in your browser

### Build automation

* [load-grunt-tasks](https://github.com/sindresorhus/load-grunt-tasks) - Load multiple grunt tasks using globbing patterns
* [grunt-shell](https://github.com/sindresorhus/grunt-shell) - Run shell commands
* [grunt-contrib-sass](https://github.com/gruntjs/grunt-contrib-sass) - Compile Sass to CSS
* [grunt-concurrent](https://github.com/sindresorhus/grunt-concurrent) - Run grunt tasks concurrently
* [grunt-contrib-copy](https://github.com/gruntjs/grunt-contrib-copy) - Copy files and folders
* [grunt-contrib-watch](https://github.com/gruntjs/grunt-contrib-watch) - Run predefined tasks whenever watched file patterns are added, changed or deleted

### Consoles

To develop with ease, it's suggested to have 3 separate console windows open.
A great Windows app is [ComEmu](https://conemu.github.io/). Make sure they
are all open to the current working directory (cwd) of this project.

#### Build

This will build the site using Jekyll and watch for any `_site` changes so
that additional files can be copied on the fly.

`grunt build`

#### Jekyll Server

This will serve the Jekyll website which also watches Jekyll files for changes
overwriting the `_site` directory each time. This is why the previous console
is so important.

`grunt serve`

#### Live Server

This will serve the site with JavaScript that will automatically refresh
your browser every time a change is detected. No more pesky F5 buttons each time.
You need to run this server on the generated website folder.

`cd _site`
`live-server`
