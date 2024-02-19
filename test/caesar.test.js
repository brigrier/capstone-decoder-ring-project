// Write your tests here!
const expect = require("chai").expect
const caesar = require("../src/caesar/caesarModule.caesar")

describe("caesar", () => {
    // Error Handling
    it("should return false if the shift amount is 0", () => {
       const input = ""
       const shift = 0
       const encode = true

       let result = caesar(input, shift, code)

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

   })

   it("should leaves spaces and other symbols as is", () => {

   })

   it("should ignore capital letters", () => {

   })

   it("should appropriately handle letters at the end of the alphabet", () => {

   })

   it("should allow for a negative shift that will shift to the left", () => {

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