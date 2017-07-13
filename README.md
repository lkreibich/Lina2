# Lina Kreibich - Psychotherapie Starnberg.
Based on this Middleman template: [https://github.com/axyz/middleman-zurb-foundation](https://github.com/axyz/middleman-zurb-foundation).

### Development Setup
Tested with Ruby 2.2.2p95. Should work with any Ruby version >= 2.0.

check out branch `source` for the source code. Then check out branch `master` in a separate git clone. 

    git clone git@github.com:lkreibich/lkreibich.github.io.git source-repo
    cd source-repo
    git checkout source
    git branch -d master

    git clone git@github.com:lkreibich/lkreibich.github.io.git dist-repo
    cd dist-repo
    git branch -d source

    cd source-repo
    bundle (tested with bundler version 1.15.1, see below for troubleshooting when EventMachine install fails)

Should you run into the following error:

    ./project.h:116:10: fatal error: 'openssl/ssl.h' file not found
    #include <openssl/ssl.h>

Install `eventmachine` with the following command:

    gem install eventmachine -v '1.0.7' -- --with-cppflags=-I/usr/local/opt/openssl/include


#### Bower Setup

!!! I've decided to check in the `bower_components` folder to make the build more future-safe. The followin instructions should therefor only be required when updating or adding a bower dependency.

+ Update 2017-07-13: also tested with node 8.1.4, npm 5.0.3, and bower 1.8.0.
+ check that you have `npm` installed (tested with version 2.7.4, but slightly older versions should be fine)
  `npm -v`
+ if you **don't** have npm, install `node` (which includes `npm`) via Homebrew with: `brew update && brew install node`
+ install Bower:
  `npm install -g bower`
+ install this project's Bower packages (must be executed in the project folder):
  `bower install`
+ start file watcher and server with:
  `bundle exec middleman`
+ open `http://localhost:4567`

#### To commit new code

    cd source-repo
    MAKE SOME CHANGES
    middleman build

The code in `dist-repo` should have been changed, commit and push.



### Bower package versions

```
-> % bower list
bower check-new     Checking for new versions of the project dependencies..
foundation-compass-app#0.0.1 /Users/paul/p/lina-kreibich/repo
└─┬ foundation#5.5.2
  ├── fastclick#1.0.6
  ├── jquery#2.1.4
  ├─┬ jquery-placeholder#2.0.9 (latest is 2.1.1)
  │ └── jquery#2.1.4
  ├─┬ jquery.cookie#1.4.1
  │ └── jquery#2.1.4
  └── modernizr#2.8.3
```
