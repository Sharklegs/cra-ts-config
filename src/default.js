const eslintRules = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "./tsconfig.json",
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    "@typescript-eslint"
  ],
  "extends": [
    "react-app",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "prettier",
    "prettier/@typescript-eslint",
    "prettier/react"
  ],
  "rules": {
    "no-unused-expressions": 0,
    "no-param-reassign": [
      2,
      {
        "props": false
      }
    ],
    "no-plusplus": [
      0,
      {
        "allowForLoopAfterthoughts": true
      }
    ],
    "react/jsx-fragments": 2,
    "react/jsx-props-no-spreading": [
      1,
      {
        "exceptions": [
          "Component"
        ]
      }
    ],
    "react/require-default-props": [
      1,
      {
        "ignoreFunctionalComponents": true
      }
    ],
    "@typescript-eslint/no-unused-expressions": [
      2,
      {
        "allowShortCircuit": true
      }
    ],
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/explicit-member-accessibility": 0,
    "@typescript-eslint/no-unused-vars": [
      2,
      {
        "argsIgnorePattern": "^_"
      }
    ],
    "no-console": [
      1,
      {
        "allow": [
          "warn",
          "error"
        ]
      }
    ],
    "object-shorthand": 2,
    "jsx-a11y/anchor-has-content": 0,
    "jsx-a11y/alt-text": 0,
    "jsx-a11y/iframe-has-title": 0
  }
}

const prettierRules = {
  "arrowParens": "avoid",
  "bracketSpacing": true,
  "endOfLine": "lf",
  "jsxBracketSameLine": false,
  "jsxSingleQuote": false,
  "printWidth": 80,
  "proseWrap": "preserve",
  "quoteProps": "as-needed",
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "all"
}

module.exports = {
  eslintRules,
  prettierRules,
}