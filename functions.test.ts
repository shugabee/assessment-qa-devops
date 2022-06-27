
const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('Array Return', () => {
        expect(shuffleArray.isArray)
    })

    test('array length check', () => {
        expect(shuffleArray.length === Array.length)
    })

});
