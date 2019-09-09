React boilerplate project - source: egghead.io/[Andy Van Slaars](https://github.com/avanslaars)

Sample project in React with Webpack, Babel. It: 
* bundles JS modules with Webpack
* compiles modern ES6 to browser-compatibile JS with Babel

---

Clone/download, run `npm install` from within project directory.  

**To build in production mode**  

`$ npm run build`

**To build in development mode**  

`$ npm run build -- --mode development`  
   
or: change the `mode` flag inside `webpack.config.js` to `development` and run `$ npm run build`  

**Run in command line**  

`$ node dist/app.bundle.js`  

**Run with Babel**  

`$ $(npm bin)/babel ./src/greet.js --presets=@babel/preset-env`  
