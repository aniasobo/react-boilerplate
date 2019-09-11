React boilerplate project - source: egghead.io/[Andy Van Slaars](https://github.com/avanslaars)

Sample project in React with Webpack, Babel and Jest. It: 
* bundles JS modules with Webpack
* compiles modern ES6 and JSX to browser-compatibile JS with Babel
* runs Jest tests for React components
* is configured with a full suite of modern JS tooling


---

Clone/download, run `npm install` from within project directory.  

### 🎬 To build in production mode

`$ npm run build`

### ䷴ To build in development mode  

`$ npm run dev`  

The script will automatically open `localhost:9000` in your browser. The server is watching for changes so no need to refresh.  

### 🌶 To build in dev mode with hot reloading 

`$ npm run dev:hot` - the state of your app will be preserved while changes are applied live.

### ⦝ To view bundle sizes  

Start with `$ npm run build`  
       
Follow with `$ open dist/bundle_sizes.html`  
      
The report will open in a browser window.  
    
### 🧐 Run tests with `$ npm test`      

Tests are colocated in `src`.