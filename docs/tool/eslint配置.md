#### react eslint配置
```
{
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "extends": [
    "standard",
    "eslint:recommended",
    "react-app"
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "rules": {
    "semi": [
      "error",
      "always"
    ],
    "quotes": [
      "error",
      "single",
      {
        "avoidEscape": true
      }
    ],
    "space-before-function-paren": "off",
    "no-console": "off"
  }
}
```

//.eslintignore
```
/config
/node_modules
/scripts
```