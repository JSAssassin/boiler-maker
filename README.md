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

\*\*react-dom This package serves as the entry point to the DOM and server renderers for React. It is intended to be paired with the generic React package, which is shipped as react to npm.

\*\*react-router-dom - DOM bindings for React Router.

### Note : .babelrc file tells babel how to parse our code.

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

environment variables are set on the terminal that the program is being launched from. If the terminal sesssion ends, the environment variables that were exported goes away too...Therefore when we start a new terminal we need to set the variables again. There are two ways to set up environment variables.

One way is to keep those variables in a file in your computer and you don't commit that file to github instead put it on .gitignore and follow instructions here https://www.npmjs.com/package/dotenv and other way is setting the env variable everytime we open up the terminal.

https://www.npmjs.com/package/dotenv

# Server

### Logging Middleware

Having server logs helps with debugging (even in production environments). Install and hook up a logger like morgan, express-logger, or Fullstack's own volleyball.

const morgan = require('morgan');
app.use(morgan('dev'));

### Static Middleware

Once your browser gets your index.html, it often needs to request static assets from your server - these include javascript files, css files, and images. Many developers organize this content by putting it into a public folder.

app.use(express.static(path.join(\_\_dirname, './path/to/static/assets')));

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

### Installing session and protecting session secret

npm install --save express-session
require('dotenv').config() as early as possible in your application, require and configure dotenv.

Then make a .env file and store the session secret, client secret, client_id and database url in it.

Never commit the .env file, so we need to put it inside .gitignore.

### Session Store (Optional)

Right now, we're storing our session information in memory, which means it will only live for the life of our server. This is fine for testing, but a production app could be making new deploys several times a day, so this could be disruptive.

connect-session-sequelize allows us to store session information in our postgres database, so we can restart or redeploy our server without worrying about interrupting logged-in-users.

### Installing passport and initializing it

npm install --save passport
We need to initialize passport so that it will consume our req.session object, and attach the user to the request object. Put the following after the session middleware.

```const passport = require('passport');

app.use(passport.initialize());
app.use(passport.session());

```

### Serialize and Deserialize user

Remember that serialization is usually only done once per session (after we invoke req.login, so that passport knows how to remember the user in our session store. Generally, we use the user's id.

Deserialization runs with every subsequent request that contains a serialized user on the session - passport gets the key that we used to serialize the user, and uses this to re-obtain the user from our database.

### Encrypt Passwords

Salting and hashing is used using node's built-in crypto module.
Then add Login, SignUp, Log Out and Get Me routes to express.

### OAuth2

```
npm install --save passport passport-google-oauth

```

We'll need to register ourselves with Google and obtain a client ID and a client secret. You can do this from the [Google Cloud Console!](https://console.cloud.google.com/)
follow instructions from OAuth implementation in Login / Auther Projects

# Testing

```
npm install --save-dev mocha chai

```

Mocha is your test "framework" - it provides you with functions like describe and it. Chai is an "assertion" library - it provides you with functions like expect, should, and assert. They are in two separate libraries because neither one of them depends upon or assumes that you are using the other. You could use Mocha with any assertion library, and you could use Chai with any test framework.

### Testing Server

For our Express routes, we'll also want to avail ourselves of supertest - remember that supertest is an abstraction for testing HTTP requests: `npm install --save-dev supertest`

### Testing Client

the enzyme library, provides a browserless abstraction for testing React components: `npm install --save-dev enzyme`
Also install an additional dev dependency: react-addons-test-utils or react-test-renderer—based on your current react version. [Learn More](https://github.com/airbnb/enzyme#installation)

These libraries are the bare minimum we need to get off the ground with testing. However, here's a list of some other handy libraries that may come in handy:

sinon - provides spies, stubs and mocks
chai-as-promised - extends chai with assertions specific to promises
chai-things - extends chai with helpful assertions specific to arrays
sinon-as-promised - extends sinon with sugar for promises
chai-enzyme - extends chai with some convenience functions for working with enzyme

[Learn More](https://www.chaijs.com/plugins/)

Write a test script in your package.json so that you can simply say npm test to execute your tests. This script will run the mocha command for any spec files in your project. You should also npm install --save-dev babel-register so that you can run your specs through the babel compiler on the fly (you'll need to add the --compilers flag like so: --compilers js:babel-register).

**\*\*** Inside scripts in the package.json file add
`{ "test": "mocha ./tests/*.spec.js --require @babel/register", "test:watch": "mocha ./tests/*.spec.js --require @babel/register --watch" }`

test will run mocha, it will find for the folder tests and run any file inside it that ends with .spec.js and then @babel/register is required to run JSX that is used in the front end.

test:watch will do the same thing as nodemon but for the tests. It will rerun the tests everytime there is a change in the tests.
