const syllable = require("syllable");

/**
 * switchY - checks if last letter of the word is 'y' and replaces it with an 'i'
 * @param {string} word - the word to check
 */
const switchY = word => word.slice(0, -1) + `i`;

/**
 * getSuffix - returns the appropriate suffix based on comparative or superlative
 * @param {boolean} compare - whether or not you want to use the comparative
 */
const getSuffix = compare => (compare ? "er" : "est");

/**
 * cs - returns the formatted word if the word is an adjective
 * @param {string} word
 * @param {boolean} compare
 */
const cs = (word, compare) => {
  // if word has 3 or more syllables or ends in 's', we prepend 'more' or 'most'
  if (syllable(word) >= 3 || word.slice(-1) === "s") {
    return compare ? "more " : "most " + word;
  } else {
    // otherwise, return the 'er' or 'est' suffix
    return word.slice(-1) === "y"
      ? switchY(word) + getSuffix(compare)
      : word + getSuffix(compare);
  }
};

module.exports = cs;
