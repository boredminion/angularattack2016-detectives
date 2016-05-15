# [Detectives](http://detectives.2016.angularattack.io/)

How do you animate in Angular 2? The answer to that question is what we set out to answer this weekend. Following a trail of clues the answers are becoming clear.

>  I can already see the end result will not be using actual ng2 animation decorators 

* [Production Site on Surge](http://detectives.2016.angularattack.io/)
* [Team Site on Angular Attack](https://www.angularattack.com/entries/3433-the-detectives)
* [GIT Repo](https://github.com/rumblex/angularattack2016-detectives)

### Base Libraries

* [Angular 2](https://github.com/angular/quickstart) structural framework
* [Webpack Module Bundler](https://github.com/webpack/webpack) static asset generator
* [HTML5 Gamepad Controller](https://github.com/kallaspriit/HTML5-JavaScript-Gamepad-Controller-Library) controller support

### Animation Libraries

> After failing to deploy Matias Niemelä's ng-conf-demo to Surge, I found a few animation libraries that may be useful in the meantime. It worked great locally though!

* [snabbt](https://github.com/daniel-lundin/snabbt.js) animation
* [vivus](https://github.com/maxwellito/vivus) SVG animation

### Installation

First, make sure you have the latest [Node](https://nodejs.org)

* `git clone git@github.com:rumblex/angularattack2016-detectives.git`
* `cd angularattack2016-detectives`
* `npm install`

## Develop

* `npm start` will start the server locally - you're on your way to Detectives

## Production

* `npm run build` creates a small static package in the /dist folder