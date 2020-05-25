---
title: BEGINNERS GUIDE TO JAVASCRIPT MODULES & WEBPACK
image: https://miro.medium.com/max/501/1*SoUYj-zL7Nh_4nEyZ0KjnQ.jpeg
description: understanding what modular javascript equals to understanding what webpack is about.
date: "2018-04-19"
tags: webpack javascript
---

Imagine you just arrived Lagos in Nigeria, and you want to get to your hotel from the the airport so you can relax after the long trip. Now Lagos is a large city made up of many other areas. To get to your hotel you need to first locate the town where the hotel is, also you need to know the street and building number of the hotel. If Lagos was not structured in different pieces comprising of town’s, street, building numbering it will be quite hard to transit the city. This Structure is MODULAR in nature( i.e having different pieces that can be connected to build up something ).

JavaScript modules is a programming style that is based on the modular programming concept. Modular programming is a concept if understood can make life really easy for developers. Webpack is a tool that helps you manage your JavaScript modules and bundles these modules into one JavaScript file. Having a basic understanding of modules is a prerequisite for understanding what webpack is and what it can do for you as a developer, and that is what i intend to do with this article(give you a basic introduction to JavaScript modules). So let’s get started!

Modular programming is a concept that advocates that you break up your codes into several pieces(known as MODULES) that can can used in other part of your code. So instead of having one large JavaScript file containing all the code for your project, you have pieces(modules) of codes that have different roles they play in your project and can be IMPORTED into other modules that needs them to function. So the the idea is that you import modules into other modules that are dependent on them, and also your make modules exportable so that they can be imported into any modules that require them. The keyword here are IMPORT and EXPORT.

Now what is JavaScript modules?
![shot 1](https://miro.medium.com/max/433/1*h_is4UkKpcF17kOCRPyRNg.png)
![shot 2](https://miro.medium.com/max/470/1*DWdZJyG5x_vFPG-SRPnytw.png)

JavaScript modules are just different pieces of JavaScript codes that perform different functions and can be imported when required into other modules.

Usually, the relevance of JavaScript modules is less significant when you have a little codebase but when codebase begins to grow into thousands and it starts becoming hard to keep track of the various functionalities of your code then you will see the need to write modular codes.

## WHY SHOULD I WRITE MODULAR CODES?

* Modular Programming makes debugging less stressful.
* Modular programming helps your create reusable pieces of code that can be used in future projects without having to write those code again or copy them from your previous project.
* Modular programming makes code refactoring really easy! (just imagine refactoring a single JS file with a codebase above 1000 LOC!!!!)
* Modular programming keeps you from worrying about function scope and namespace. Because function names and scope becomes unique to the module they belong to.

That’s the basics of what modular programming and JavaScript is and what it can do for you.

## WEBPACK

Now have a basic understanding of what JavaScript modules are and why they are important, but how do you manage this modules? This is where webpack comes into the picture.

webpack at it’s core is simply a module bundler.
Module bundling involves webpack getting all your JavaScript modules and throwing them into one JavaScript file(that’s the bundling process!).

webpack does this by creating a dependency graph for your project. The dependency graph keeps track of your project modules(different pieces) and their various dependencies(the other piece of your project code) and bundles them into one file(usually named bundle.js). This way webpack can easily keep track of your project modules and manages them for you.

webpack has some other cool features aside bundling your JavaScript modules. webpack also helps you use the latest JavaScript features even when they are not supported by browsers(it achieves this by integrating babel-loaders into webpack configuration file). So that’s what webpack is, but to use webpack in project you need to understand some webpack core concepts.

## WEBPACK CORE CONCEPTS

This is no substitute to the original webpack core concepts found in the webpack documentation. So make sure to check it out.

## ENTRY

Entry is simply the point(the first JavaScript module) where webpack starts bundling your modules. View entry as the main door into a house, there are other doors in the house but to enter the house you have to use the main door.

The entry is usually a JavaScript file where all the other modules and their various dependencies converge. webpack starts building the dependency graph from this file and locates the other dependencies of the other modules attached to the entry file.

## OUTPUT

Output is a path to a file where webpack throws all the bundled modules into.

It will be good you know that the bundled modules is what is served to the browser and that is what you should add to your html file.


bundle.js should be included in the script tag of your html file.

![loaders](https://miro.medium.com/max/464/1*F24MhQD4SvCSquZGZMKzTg.png)

## LOADERS

Remember when i said webpack allows you to use language updated features that are not yet supported by browsers? loaders give webpack that superpower.

loaders tells webpack how to handle or interact with files that are not JavaScript. Webpack is built with JavaScript and understands only JavaScript, but our project contains other files that are not JavaScript! loaders are there to solve this problem. See below for a few list of what loaders can help you do with webpack;

* loaders transforms files that are not JavaScript into JavaScript.

* loaders ( style-loaders) allows you to import your css styles into your JavaScript file which will ordinarily not be possible.

* loaders also helps your treat this none JavaScript files as modules too. the css-loaders allows you to write modular css for parts of your html file. Now instead of having one large css file file you can now have several modular css files for particular parts of your html code, also instead of linking the css link into your html file, style-loaders allows you to import this styles into your main.js file(the webpack entry file).

* Loaders also allow you to use updated language features that are not supported in web browsers. Babel-loaders gives you the liberty to use the ES6 import and export(which supports modular programming in JavaScript) keyword that is yet to be supported in old browser version like IE, chrome version 50 below.

## PLUGINS

plugins at its core basically add more functionality to your webpack compilation process. plugins helps you add custom built functionalities the webpack build process. Its more like plugins give webpack more superpowers during its build process.

So that’s the basics of what modular programming, JavaScript modules, and webpack is. I hope you enjoyed it and now at least grasp all the concepts that were explained.

In a bid not to make this boring and bulky, I decided to make this blog post modular, so I would be creating another module on how to include and configure webpack for your projects. See you in the next module.