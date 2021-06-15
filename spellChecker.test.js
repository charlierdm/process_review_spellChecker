const spellChecker = require("./spellChecker");

describe("spellChecker", () => {
  it("returns a correctly spelt single word", () => {
    expect(spellChecker("time", ["time"])).toEqual("time");
  });

  it("returns an incorrectly spelt word with tildas", () => {
    expect(spellChecker("tme", ["time"])).toEqual("~tme~");
  });

  it("returns an incorrectly spelt word with tildas", () => {
    expect(spellChecker("cta", ["cat"])).toEqual("~cta~");
  });

  it("returns a capitalized word that is spelt correctly", () => {
    expect(spellChecker("Hand", ["hand"])).toEqual("Hand");
  });

  it("returns a capitalized word that is spelt correctly", () => {
    expect(spellChecker("haNd", ["hand"])).toEqual("haNd");
  });

  it("returns two words that are all spelt correctly", () => {
    expect(spellChecker("the clock", ["the", "clock"])).toEqual("the clock");
  });

  it("returns two words, one is incorrectly spelt with tildas", () => {
    expect(spellChecker("teh clock", ["the", "clock"])).toEqual("~teh~ clock");
  });

  it("returns two words, both incorrectly spelt with tildas", () => {
    expect(spellChecker("teh clokc", ["the", "clock"])).toEqual(
      "~teh~ ~clokc~"
    );
  });

  it("throws an error if passed an empty string", () => {
    expect(() => {
      spellChecker("", ["sandwhich"]).toThrow("No words found.");
    });
  });
});
