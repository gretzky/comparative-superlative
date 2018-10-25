# comparative-superlative

get the comparative or superlative of a word

## installation

```
npm install comparative-superlative
// or
yarn add comparative-superlative
```

## usage

```
const cs = require('comparative-superlative')

// cs returns the superlative by default
// get the comparative by specifying `true`

cs("important", true);
// more important

cs("famous");
// most famous

cs("happy")
// happiest
```

comparatives / superlatives must be adjectives. cs checks for that using [brill](https://github.com/words/brill).

---

⛳️ init'd with [golf](https://github.com/gretzky/golf)
