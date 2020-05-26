---
title: Node.js Module System
image: https://dev-to-uploads.s3.amazonaws.com/i/cc1ijb983a8x222cp1cf.png
description: An in depth guide on Node module system
date: "2020-04-22"
tags: node javascript npm
---
![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/cc1ijb983a8x222cp1cf.png)

Node.js is a JavaScript run-time built on top of the chrome v8 engine. Succinctly, Node.js as a platform provides an environment outside of the traditional web browser for executing JavaScript code (It's important to note here that Node.js was created for building network applications using JavaScript).

A typical production ready Node.js application is *feature* intensive (the endpoints of Restful API's are typical example where each endpoint is a feature and have a unique responsibility) and demands some amount of logic which in turn demands that you code lots of functions that are responsible for realizing the different features that make up your application. To keep our application maintainable it's a good practice to split the different logic into smaller pieces that have specific responsibilities and then import these pieces of logic into the main application for reuse. In Node.js we are given a *module system* which enable application developers to abstract logic into modules, export the modules to be used else where in our application. Understanding how the module system works is integral for writing maintainable Node.js applications.

A module is a piece of a program with abstracted functionality needed by the entire program. Typically, a program in most cases is composed of different modules.

> NB: For the rest of this article, i'd be using *Node* in place of **Node.js** mostly because it takes lesser keystroke and that is pretty what it's called in the ecosystem.

# The Module System Architecture

In Node every file is considered a module and before each file (module) is executed, it's wrapped within a *Module Wrapper* function which exposes the following variables/arguments *module, exports, require, __filename, __dirname* and looks something like;

```javascript
(function(exports, require, module, __filename, __dirname) {
  // module code goes in here
});
```

The *exports* and *module* object exposed by the wrapper function enable the module to expose functions/objects to be used by other modules. the require object allows for the module to import other module(s), the *__filename, __dirname* are both convenience variables for accessing the file and directory path of the module respectively. It's equally important to note that the variables exposed by the wrapper function are not globally scoped. Instead, they are locally scoped to the module and every other variable declared within the module (in the global scope of the module) are also not directly accessible by other modules when the module is imported into another module except these variable are explicitly exported by the module. Hence, object naming collision is easily avoided between the importing module and imported module.

> NB: Please note that file and module can be used interchangeably, but i'd still explicitly remind you that to avoid any misunderstanding.

## module

The *module* variable is an object that represents the file in which it exits. Lets investigate this variable by creating an empty `index.js` file(module) and logging the variable to console:

```javascript
console.log(module);

/*
  returns;
  
  Module {
  id: '.',
  path: 'C:\\Users\\kodekage\\Desktop\\projects\\node\\module',
  exports: {},
  parent: null,
  filename: 'C:\\Users\\kodekage\\Desktop\\projects\\node\\module\\index.js',
  loaded: false,
  children: [],
  paths: [
    'C:\\Users\\kodekage\\Desktop\\projects\\node\\module\\node_modules',
    'C:\\Users\\kodekage\\Desktop\\projects\\node\\node_modules',
    'C:\\Users\\kodekage\\Desktop\\projects\\node_modules',
    'C:\\Users\\kodekage\\Desktop\\node_modules',
    'C:\\Users\\kodekage\\node_modules',
    'C:\\Users\\node_modules',
    'C:\\node_modules'
  ]
}

*/
```

> NB: The output you see here will slightly differ from yours due to the simple fact that we are not using the same machine and you might have created your file in a totally different folder.

### module.exports

module.exports property exposes values from the module which can be imported into other modules by `require('/path/to/module')` and reused. Let's create a *utility.js* module, that exposes an addition and subtraction function.

```javascript
//utility.js

const add = (a, b) => {
  return a + b;
}

const subtract = (a, b) => {
  return a - b;
}

module.exports.add = add;
module.exports.subtract = subtract;
```

*module.exports.add* pushes the **add function** into the exports object assigning *add* as the key and the *add function* as the value. **module.exports.subtract** also assigns subtract as the second property of the exports object within the *module* object. To further illustrate this, let's log the module object to the console.

```javascript
// utility.js

console.log(module);

/*
  returns;

  Module {
  id: '.',
  path: 'C:\\Users\\kodekage\\Desktop\\projects\\node\\module',
  exports: { add: [Function: add], subtract: [Function: subtract] },
  parent: null,
  filename: 'C:\\Users\\kodekage\\Desktop\\projects\\node\\module\\index.js',
  loaded: false,
  children: [],
  paths: [
    'C:\\Users\\kodekage\\Desktop\\projects\\node\\module\\node_modules',
    'C:\\Users\\kodekage\\Desktop\\projects\\node\\node_modules',
    'C:\\Users\\kodekage\\Desktop\\projects\\node_modules',
    'C:\\Users\\kodekage\\Desktop\\node_modules',
    'C:\\Users\\kodekage\\node_modules',
    'C:\\Users\\node_modules',
    'C:\\node_modules'
  ]
}

*/
```

the exports property looks something like; `exports: { add: [Function: add], subtract: [Function: subtract] },`. Indicating that the functions have being successfully exposed. When *utility.js* is required in another module, the functions can be called within the requiring module.

### exports

exports is a convenience method for *module.exports* as it takes lesser keystroke and is also succinct. Drawing from our previous code sample, *module.exports.add* and *module.exports.subtract* can also be written as *exports.add* and *exports.subtract* respectively.

## require

*require* is a function used for loading a module into another module. It exposes the imported(the module been required) modules exported objects and makes them usable withing the requiring module.

```javascript
// program.js

const utility = require('./utility');

utility.add(5, 6); // returns 11
utility.substract(3, 6) // returns -3
```

There are are different types of module you can typically load by calling the require function;
- Node core module e.g http, fs, net, etc
- Application dependency module, typically loaded from node_modules
- local module/files

When loading a core module or a module in the node_modules folder you simply reference the module name e.g; `const http = require('http')`, `cosnt socketIo = require('scoket.io')`. To load a local module(file) you need to add the file path to the module e.g `const utility = require('./utility)` this means the utility module is in the same directory as the module importing it.

### How Module loading works

when loading a module node checks if the module identifier (the string passed into the require function call) begins with *'./'* or *'/'* or *'../'* and when they don't Node checks if the identifier matches any of it's core module (http, net, fs, etc) and it finds a match, it loads the identified core module else Node knows to look into *node_modules* folder for the required module.

- **'./'** is a relative path to the module and it means that both modules (the imported module and the importing module) must be in the same directory
- **'../'** is also indicates a relative file path to the module, but this time both modules are not in the same directory level.
- **'/'** is an absolute path to the module, and node starts looking from the root of the file system

## Note on`Node_modules`

The node_modules directory is a repository for third party modules downloaded from package managers like npm or yarn. Node loads modules(packages) from this folder when the identifier passed into the *require* function is not a core module or the identifier does not begin with './', '/' or '../'. In order to load from node_modules, Node keeps appending *"/node_modules"* to the file path starting from the parent directory of the requiring module, then node keeps moving up the tree till it locates the file.

Imagine you created a *program.js* file in *$HOME/projects/sample-node-app/program.js* which requires a *utility.js* module which happens not to be a core module and the identifier does not begin with an absolute path "/" or relative path "./" or "../".

```javascript
// program.js
const utility = require("utility");
```

Node next assumption will be that this module must be in a node_modules folder. Node will start it's search by firstly appending node_module to current directory of the requiring module(file) which for example might be *$HOME/projects/sample-node-app/**node_modules**/utility.js* (where $HOME is a short cut environmental variable to the users home), if the file is not found there Node moves it's search to the parent directory; *$HOME/projects/node_modules/utility.js*. If the module is also not found, Node keeps moving up the parent directory till it gets to the root directory of the file system and if the module is still not found, Node throws an error stating that it could not find the required module. An important point to note here is that Node **will not** append a */node_modules* directory to any directory that already has a node_modules folder created in it or a path that ends with */node_modules*. Node will instead jump into the existing node_module directory to look for the required module.

This is basically one of the reason a node_modules directory is created in the root of your project directory when you install third party modules *locally* from npm or yarn.

## Conclusion

Node's implementation of a module system is really unique especially the way Node  handles module scoping (thanks to the Module Wrapper function). Now package creators can name objects the way they choose without worrying about naming clashes, Package managers can utilize the power of node_modules for delivering the packages your Node application depends on and also as a Node developer you can worry less about this trivial matters and focus your energy on writing maintainable code.

I strongly recommend you experiment with the idea your just absorbed and also dig into [the API documentation](https://nodejs.org/api/modules.html) for a deeper dive into Node module system.