const syllable = require("syllable");

const irregulars = ["good", "bad", "much", "far"];

const isIrregular = input => irregulars.includes(input);

const handleIrregularWord = word => {
  switch (word) {
    case "good":
      return {
        comparative: "better",
        superlative: "best"
      };
    case "bad":
      return {
        comparative: "worse",
        superlative: "worst"
      };
    case "much":
      return {
        comparative: "more",
        superlative: "most"
      };
    case "far":
      return {
        comparative: ["further", "farther"],
        superlative: ["furthest", "farthest"]
      };
    default:
      throw new Error(
        "You've encountered a mystery error! Please open an issue so I know what caused this."
      );
  }
};

const tooManySyllables = word => {
  return syllable(word) >= 3 || word.slice(-1) === "s";
};

const comparative = word => {
  return tooManySyllables(word) ? `more ${word}` : `${word}er`;
};

const superlative = word => {
  return tooManySyllables(word) ? `most ${word}` : `${word}est`;
};

const handleWord = word => {
  if (word.slice(-1) === "y" && !tooManySyllables(word)) {
    return word.slice(0, -1) + "i";
  } else if (word.slice(-1) === "e") {
    return word.slice(0, -1);
  } else {
    return word;
  }
};

/**
 * cs - returns the formatted word if the word is an adjective
 * @param {string} input - the input to analyze
 */
const cs = input => {
  const word = handleWord(input);

  if (isIrregular(input)) {
    return handleIrregularWord(input);
  } else {
    return {
      comparative: comparative(word),
      superlative: superlative(word)
    };
  }
};

module.exports = cs;
