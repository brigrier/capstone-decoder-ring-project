// Write your tests here!

const expect = require("chai").expect;
const {substitution} = require("../src/substitution")

describe("substitution", () => {
    // error handling
    it("should return false if the substitution alphabet is missing", () => {
        
        const input = "pink"
        const alphabet = ""
        const expected = false
        const actual = substitution(input, alphabet)
        expect(actual).to.eql(expected) 
        
    })

    it("should return false if the substitution alphabet is not exactly 26 characters", () => {
        const input = "pink"
        const alphabet = "incodw98sj2k"
        const expected = false
        const actual = substitution(input, alphabet)
        expect(actual).to.eql(expected)
    })

    it("should return false if the substitution alphabet does not contain unique characters", () => {
        //const input = "pink"
        const alphabet = "abcdefghijklmnopqrstuvwxyz"
        const expected = false
        const actual = substitution(alphabet)
        expect(actual).to.eql(expected)
    })

    //encoding a message

    it("should encode a message by using the given substitution alphabet", () => {
        const input = "hike"
        const alphabet = "zyxwvutsrqponmlkjihgfedcba"
        const expected = "srpv"
        const actual = substitution(input, alphabet, encode = true)
        expect(actual).to.eql(expected)
    })

    it("should work with any kind of key with unique characters", () => {
        const input = "love"
        const alphabet = "zyxwvutsrqponmlkjihgfedcba"
        const expected = "olev"
        const actual = substitution(input, alphabet, encode = true)
        expect(actual).to.eql(expected)
    })

    it("should preserve spaces", () => {
        const input = "hi me"
        const alphabet = "zyxwvutsrqponmlkjihgfedcba"
        const expected = "sr nv"
        const actual = substitution(input, alphabet, encode = true)
        expect(actual).to.eql(expected)
    })

    //decoding a message

    it("should decode a message by using the given substitution alphabet", () => {
        const input = "srpv"
        const alphabet = "zyxwvutsrqponmlkjihgfedcba"
        const expected = "hike"
        const actual = substitution(input, alphabet, encode = false)
        expect(actual).to.eql(expected)
    })

    it("should work with any kind of key with unique characters", () => {
        const input = "olev"
        const alphabet = "zyxwvutsrqponmlkjihgfedcba"
        const expected = "love"
        const actual = substitution(input, alphabet, encode = false)
        expect(actual).to.eql(expected)
    })

    it("should preserve spaces", () => {
       const input = "sr nv"
       const alphabet = "zyxwvutsrqponmlkjihgfedcba"
       const expected = "hi me"
       const actual = substitution(input, alphabet, encode = false)
       expect(actual).to.eql(expected)
    })


})

