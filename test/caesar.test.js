// Write your tests here!
const {expect} = require("chai").expect
const {caesar} = require("../src/caesar")

describe("caesar", () => {
    // Error Handling
    it("should return false if the shift amount is 0", () => {
       const input = ""
       const shift = 0
       const encode = true

       let result = caesar(input, shift, encode)

       expect(result).to.be.false
    })

    it("should return false if the shift amount is above 25", () => {
        const expected = false
        const actual = caesar("", 26)
        expect(actual).to.eql(expected)
    })

    it("should return false if the shift amount is less than -25", () => {
        const expected = false
        const actual = caesar("", -26)
        expect(actual).to.eql(expected)
    })

   // encoding a message //
   it("should encode a message by shifting the letters", () => {
       const input = "pink"
       const shift = 2
       const expected = "rkpm"
       const actual = caesar(input, shift)
       expect(actual).to.eql(expected)
   })

   it("should leaves spaces and other symbols as is", () => {
       const input = "hey, y'all"
       const shift = 2
       const expected = "jga, a'cnn"
       const actual = caesar(input, shift)
       expect(actual).to.eql(expected)
   })

   it("should ignore capital letters", () => {
       const input = "Blue"
       const shift = 2
       const expected = "Dnwg"
       const actual = caesar(input, shift)
       expect(actual).to.eql(expected)
   })

   it("should appropriately handle letters at the end of the alphabet", () => {
    const input = "yz"
    const shift = 2
    const expected = "ab"
    const actual = caesar(input, shift)
    expect(actual).to.eql(expected)
   })

   it("should allow for a negative shift that will shift to the left", () => {
    const input = "zapp gum"
       const shift = -3
       const expected = "wxmm drj"
       const actual = caesar(input, shift)
       expect(actual).to.eql(expected)
   })

   // decoding a message

   it("should decode a message by shifting the letters in the opposite direction", () => {

   })

   it("should leaves spaces and other symbols as is", () => {

   })

   it("should ignore capital letters", () => {

   })

   it("should appropriately handle letters at the end of the alphabet", () => {

   })

   it("should allow for a negative shift that will shift to the left", () => {

   })
   
})