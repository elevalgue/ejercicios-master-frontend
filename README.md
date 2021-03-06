# Front-end Master Exercises 🍋

## Content

#### Module 01: Layout 💅

``` html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Layout</title>
    <link rel="stylesheet" href="./src/styles/main.scss" />
  </head>
  <body>
      <div class="box darken-1">
        <span class="color-box-text">Darken 1</span>
      </div>
  </body>
</html>
```

#### Module 02: Lenguage ⚙️

```javascript
function clone(obj) {
  return { ...obj };
}

console.log(clone(original));
```

#### Module 03: Bundling 🍱

``` json
"scripts": {
"start": "run-p -l type-check start:dev",
"build": "run-p -l type-check build:prod",
"build-dev": "run-p -l type-check build:dev",
"start:dev": "webpack serve --config webpack.dev.js",
"build:prod": "webpack --config webpack.prod.js",
"build:dev": "webpack --config webpack.dev.js",
"build:perf": "npm run type-check && webpack --config webpack.perf.js",
},
```

#### Module 04: Frameworks
#### - 01 React
```javascript
export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/list" element={<ListPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
      </Routes>
    </Router>
  );
};
```
#### - 02 Angular

##

Made with ⭐ by @elevalgue
