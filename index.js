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

const comparative = word => {
  return syllable(word) >= 3 || word.slice(-1) === "s"
    ? `more ${word}`
    : `${word}er`;
};

const comparativeSuperlative = (word, isSuperlative) => {
  const prefixed = `${isSuperlative ? "most" : "more"} ${word}`;
  const suffixed = `${word + isSuperlative ? "est" : "er"}`;
  return syllable(word) >= 3 || word.slice(-1) === "s" ? prefixed : suffixed;
};

const superlative = word => {
  return syllable(word) >= 3 || word.slice(-1) === "s"
    ? `most ${word}`
    : `${word}est`;
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

const cs = input => {
  const word = handleWord(input);

  if (isIrregular(input)) {
    return handleIrregularWord(input);
  } else {
    return {
      comparative: comparativeSuperlative(word),
      superlative: comparativeSuperlative(word)
    };
  }
};

module.exports = cs;
