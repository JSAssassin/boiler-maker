# Resources
1. [Async Vs Defer](https://flaviocopes.com/javascript-async-defer/#the-position-matters) for loading bundle.js in the head
2. [http Server ](https://www.npmjs.com/package/http-server) will serve all the static files as it is without making the bundle.js. (For development only)
3. [webpack-dev server](https://github.com/webpack/webpack-dev-server/blob/master/README.md) creates the bundle and serves it with index.html file. (For development only)

# REACT
Note : --save-dev is used for modules used in development of the application,not required while running it in production envionment --save is used to add it in package.json and it is required for running of the application

## Dev Dependencies

webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset

webpack CLI provides a flexible set of commands for developers to increase speed when setting up a custom webpack project. https://www.npmjs.com/package/webpack-cli

Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments. Babel can also convert JSX syntax (@babel/preset-react)https://babeljs.io/docs/en/

https://github.com/babel/babel-loader


[Concurrently](https://github.com/kimmobrunfeldt/concurrently) is used to run multiple commands concurrently. I am using it to run the webpack dev server and the backend node server concurrently in the development environment.


You can create bundle js files when you are ready to release ----> using the npx webpack command.

## Regular Dependencies

**react-dom This package serves as the entry point to the DOM and server renderers for React. It is intended to be paired with the generic React package, which is shipped as react to npm.

**react-router-dom - DOM bindings for React Router.

### Note :  .babelrc file tells babel how to parse our code.

# REDUX

Install redux, and react-redux and common middlewares redux-thunk and redux-logger

# CSS

webpack can do more stuff - it can build your css files into a single css file. It can also automatically create and inject a style tag into the DOM with all of your styles! This means you can write your css, import it as if it were a JavaScript module, and then webpack will take care of the rest!

# Environment

 In the browser environment, this generally refers to the window object and anything attached to window. In the Node environment, this refers to objects like process and global.

 To get a list of all of your environment variables, you can type the printenv command.

Environment variables are accessible to Node as well! To see how this works, start a Node repl by running the node command without any arguments.

We can hide secrets by setting them to be environment variables on our deployment server (instead of hard-coding them into our code, which will end up on Github!)

https://www.digitalocean.com/community/tutorials/how-to-read-and-set-environmental-and-shell-variables-on-a-linux-vps

https://devcenter.heroku.com/articles/config-vars

```
export SECRET_KEY=3049jv[03rghj[3nv0[3rjvn03e
echo $SECRET_KEY
unset SECRET_KEY
```

# Server

### Logging Middleware

Having server logs helps with debugging (even in production environments). Install and hook up a logger like morgan, express-logger, or Fullstack's own volleyball.

const morgan = require('morgan');
app.use(morgan('dev'));

### Static Middleware

Once your browser gets your index.html, it often needs to request static assets from your server - these include javascript files, css files, and images. Many developers organize this content by putting it into a public folder.

app.use(express.static(path.join(__dirname, './path/to/static/assets')));


### Parsing Middleware

Requests frequently contain a body - if you want to use it in req.body, then you'll need some middleware to parse the body.

const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

### API Routes

#### Nodemon

nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.

nodemon does not require any additional changes to your code or method of development. nodemon is a replacement wrapper for node, to use nodemon replace the word node on the command line when executing your script. https://www.npmjs.com/package/nodemon

# Sequelize

[Sequelize](https://sequelize.org/v5/) allows you to interact with our database using Js instead of writing SQL statements.

### Sequelize Instance

The sequelize package exports the Sequelize constructor. You use this to create an instance of sequelize, which is what creates the connection to your database (this is why it's sometimes stored in a variable called 'db' - it represents your database). You will also use this instance to do things like define your models. This is why it's often a good idea for the instance of sequelize to be created in its own module.

# Authentication

```npm install --save express-session passport```
