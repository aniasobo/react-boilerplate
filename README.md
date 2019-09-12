React boilerplate project - following: egghead.io/[Andy Van Slaars](https://github.com/avanslaars)

Sample project in React with Webpack, Babel and Jest. It:

- bundles JS modules with Webpack
- compiles modern ES6 and JSX to browser-compatibile JS with Babel
- runs Jest tests on React components
- is configured with a full suite of modern JS tooling
- is outfitted with Prettier and ESLint to format and lint code
- prevents unlinted and faulty code from being committed with Husky pre-commit hooks
- prevents the use of deprecated React APIs with `React.StrictMode`
- guards against accessibility errors with `jsx-a11y` and `React-axe` at runtime

---

# How to use this repo

### 👯‍♀️ Clean clone

Use `$ git clone --depth=1 https://github.com/aniasobo/react-boilerplate name-of-your-app` to clone this repo as a clean slate, without the commit history.

Run `$ npm install` from within project directory.

### 🎬 Run production mode

`$ npm run build`

### ䷴ Run development mode

`$ npm run dev`

The script will automatically open `localhost:9000` in your browser. The server is watching for changes so no need to refresh.

**While in dev, you can inspect runtime accessibility issues detected by React-axe in the console**

### 🌶🌶🌶 To build in dev mode with hot reloading

`$ npm run dev:hot` - the state of your app will be preserved while changes are applied live.

### ⦝ To view bundle sizes

Start with `$ npm run build`

Follow with `$ open dist/bundle_sizes.html`

The report will open in a browser window.

### 🧐 Run tests with `$ npm test`

Tests are colocated in `src` and run by a global config `testSetup.js`.

### 💅 Lint and format with ESLint and Prettier

Use `$ npm run format` to format last changed files with `pretty-quick`.

Use `$ npx prettier --write "**/*.js"` to format and save all existing JS files.

Use `$ npx prettier --write "**/*.json"` to format and save all existing JSON files.

Use `$ npm run lint` to lint your code with ESLint and check for accessibility issues with `jsx-a11y`.

Open the browser console in development mode to inspect runtime accessibility issues detected by `react-aXe`

**This project will prevent you from committing code that contains linter errors and failing tests**

To change this setting, edit your `package.json` accordingly:

```
  "husky": {
    "hooks": {
      "pre-commit": "pretty-quick --staged && npm run lint && npm run test"
    }
  }
```

`pretty-quick --staged` fixes formatting on files staged for commit  
`npm run lint` runs lint  
`npm run test` runs tests

**It's not recommended though!**
