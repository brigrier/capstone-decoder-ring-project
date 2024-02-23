// Write your tests here!
const expect = require("chai").expect;
const { polybius } = require("../src/polybius");

describe("polybius", () => {
  //encoding a message
  it("should encode a message by translating each letter to number pairs", () => {
    const input = "happy";
    const expected = "3211535345";
    const actual = polybius(input, encode = true);
    expect(actual).to.eql(expected);
  });

  it("should translate both 'i' and 'j' to 42", () => {
    const input = "ick jump";
    const expected = "423152 42542353";
    const actual = polybius(input, encode = true);
    expect(actual).to.eql(expected);
  });

  it("should leave spaces as is", () => {
    const input = "hey dude";
    const expected = "325145 41544151";
    const actual = polybius(input, encode = true);
    expect(actual).to.eql(expected);
  });

  //decoding a message
  it("should decode a message by translating each pair of numbers into a letter", () => {
    const input = "21135451";
    const expected = "blue";
    const actual = polybius(input, (encode = false));
    expect(actual).to.eql(expected);
  });

  it("should translate 42 to both 'i' and 'j'", () => {
    const input = "423152 42542353";
    const expected = "(i/j)ck (i/j)ump";
    const actual = polybius(input, (encode = false));
    expect(actual).to.eql(expected);
  });

  it("should leave spaces as is", () => {
    const input = "3242 4432512451";
    const expected = "h(i/j) there";
    const actual = polybius(input, (encode = false));
    expect(actual).to.eql(expected);
  });

  it("should return false if the length of all numbers is odd", () => {
    const input = "12345";
    const expected = false;
    const actual = polybius(input, (encode = false));
    expect(actual).to.eql(expected);
  });
});
