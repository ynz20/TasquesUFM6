import {repeatString} from './kata2'

describe('Kata #2: Repetició Strings', () => {
    test('Javascript x 0', () => {
        expect(repeatString('JavaScript', 0)).toBe("")
    })

    test('university x 1', () => {
        expect(repeatString('university', 1)).toBe("university")
    })

    test('hello x 3', () => {
        expect(repeatString('hello', 3)).toBe("hellohellohello")
    })

    test('? x 10', () => {
        expect(repeatString('?', 10)).toBe("??????????")
    })
})