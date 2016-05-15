# [Doug VSF](http://detectives.2016.angularattack.io/)

#### Vector Sprite Framework for Angular 2

Doug is a vector sprite. He is made of three things: 

* One Typescript file
* One CSS stylesheet
* An HTML5 template containing the vector path information

This works great with webpack as there are no actual SVG files or images. The result is a very small tree of living vector components which are easy to edit and organize. Welcome to Doug's world! 

#### Links

* [View Doug Live in Production](http://detectives.2016.angularattack.io/)
* [View Doug's Source Code at Git](https://github.com/rumblex/angularattack2016-detectives)
* [Our Site on Angular Attack](https://www.angularattack.com/entries/3433-the-detectives)

#### Libraries

* [Angular 2](https://github.com/angular/quickstart) as the structural framework
* [Webpack Module Bundler](https://github.com/webpack/webpack) as the static asset generator

> When Angular2 animation is ready, we'll be adding that into the mix.

#### Install

First, make sure you have the latest [Node](https://nodejs.org)

* `git clone git@github.com:rumblex/angularattack2016-detectives.git`
* `cd angularattack2016-detectives`
* `npm install`

#### Edit

* `npm start` will start the server locally - you're on your way to Detectives

#### Deploy

* `npm run build` creates a small static package in the /dist folder