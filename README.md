# [Doug](http://detectives.2016.angularattack.io/)

SVG is XML and that works great with Angular 2. Doug is a tree of vector sprite components. There are no images or actual SVG files contained in Doug. Each sprite is a Typescript file, a CSS stylesheet and an HTML snippet containing the visual content. When Angular2 animation is ready, we'll be adding that into the mix.

### Links

* [Production Site on Surge](http://detectives.2016.angularattack.io/)
* [Team Site on Angular Attack](https://www.angularattack.com/entries/3433-the-detectives)
* [GIT Repo](https://github.com/rumblex/angularattack2016-detectives)

### Base Libraries

* [Angular 2](https://github.com/angular/quickstart) as the structural framework
* [Webpack Module Bundler](https://github.com/webpack/webpack) as the static asset generator

### Installation

First, make sure you have the latest [Node](https://nodejs.org)

* `git clone git@github.com:rumblex/angularattack2016-detectives.git`
* `cd angularattack2016-detectives`
* `npm install`

## Develop

* `npm start` will start the server locally - you're on your way to Detectives

## Production

* `npm run build` creates a small static package in the /dist folder