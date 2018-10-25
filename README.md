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

console.log(cs("important", true));
// more important

console.log(cs("famous"));
// most famous

console.log(cs("happy"));
// happiest
```

comparatives / superlatives must be adjectives. cs checks for that using [`brill`](https://github.com/words/brill).

---

init'd with [golf](https://github.com/gretzky/golf)
