const spellChecker = (word, dictionary) => {
  let lower = word.toLowerCase().split(" ");
  let result = [];

  if (lower.length === 0) {
    throw new Error("No words were found.");
  }

  if (lower.join(" ") === dictionary.join(" ")) {
    return word;
  } else {
    for (let i = 0; i < lower.length; i++) {
      if (lower[i] === dictionary[i]) {
        result.push(lower[i]);
      } else {
        result.push(`~${lower[i]}~`);
      }
    }
  }
  return result.join(" ");
};

module.exports = spellChecker;
