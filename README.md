# Lina Kreibich - Psychotherapie Starnberg.
Based on this Middleman template: [https://github.com/axyz/middleman-zurb-foundation](https://github.com/axyz/middleman-zurb-foundation).

### Development Setup
Tested with Ruby 2.2.2p95. Should work with any Ruby version >= 2.0.

+ `gem install middleman`
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
