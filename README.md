# babel-preset-jsfuck

> Transforms your code into JSFuck

## Installation

```sh
npm install --save-dev babel-preset-jsfuck
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
    "presets": ["jsfuck"]
}
```

### Via CLI

```sh
babel --presets jsfuck script.js
```

### Via Node API

```javascript
require("@babel/core").transform("code", {
    presets: ["jsfuck"]
});
```
