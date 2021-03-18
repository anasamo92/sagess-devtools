# babel-preset-sagess

> Babel preset

## Install

```sh
$ npm install --save-dev babel-preset-sagess
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "presets": ["sagess"]
}
```

### Via CLI

```sh
$ babel script.js --presets sagess
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  presets: ["sagess"]
});
```
