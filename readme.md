# Corporate Programmer

**Theme**: Survival guide for corporate development especially for software developers entering from small to medium businesses.

**Topics board**: https://trello.com/b/IiVLRz8F/blog-surviving-corporates

### Getting started

* Install [`ruby-2.5.0`](https://www.ruby-lang.org/en/documentation/installation) - Required for gems
  Add location to PATH
  
  Installed? `ruby -v`

* `gem install rake -v=0.8.7` - Required for the Ruby Rake file

  Installed? `rake --version`
  
* Install [NodeJs](https://nodejs.org/en/download/) - Required for npm dependencies

  Installed? `node -v`

* `npm install -g grunt-cli` - Install global instance of the Grunt command line

  Installed? `grunt -version`

* `npm install` - Install dependencies from npm

* `grunt` - Executes default task to run and watch the project

I am still experiencing an error that I need to investigate later: 

    rake aborted!
    Errno::ENOENT: No such file or directory - ../app/_process

---

Check out the [credits](/credits.md) for more information.

You know what would be great? Having the entire development environment configured
in a [Docker](https://www.docker.com/) image! o_O

### Grunt build automation

Update dependencies with `npm-check-updates`. Install
`npm install -g npm-check-updates` and run it with `npm-check-updates -u`.
This command will update all dependencies to the latest versions.

Remove unused packages from `node_modules` by executing `npm prune` in the root
folder.

#### Commands

* `grunt` or `grunt serve` - Debug build, creates livereload server and opens website

* `grunt serve:release` - Release build, creates server and opens website

* `grunt deploy` - Release build and commits to release git

##### Dependencies watchlist

* [grunt-uncss](https://github.com/addyosmani/grunt-uncss) - A grunt task for removing unused CSS from your projects.
* [grunt-newer](https://github.com/tschaub/grunt-newer) - Configure Grunt tasks to run with newer files only.
* [grunt-processhtml](https://github.com/dciccale/grunt-processhtml) - Process html files at build time to modify them depending on the release environment.
* [grunt-contrib-csslint](https://github.com/gruntjs/grunt-contrib-csslint) - Lint CSS files.
* [grunt-contrib-jshint](https://github.com/gruntjs/grunt-contrib-jshint) - Validate files with JSHint.
* [grunt-svgmin](https://github.com/sindresorhus/grunt-svgmin) - Minify SVG.
* [grunt-contrib-uglify](https://github.com/gruntjs/grunt-contrib-uglify) - Minify files with UglifyJS.

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
* MySQL database and PHP page?

#### Photos

* [StockSnap.io](https://stocksnap.io) - Beautiful free stock photos

## MIT License

Copyright (c) 2016 Corporate Programmer

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
