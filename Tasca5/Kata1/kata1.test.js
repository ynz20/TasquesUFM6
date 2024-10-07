import { sumPositiveElements } from './kata1'

describe('kata #0: sumatori', () => {
    test('Sumatori de una array buida', () => {
        expect(sumPositiveElements([])).toBe(0)
    })

    test('Sumatori de 1,2,3,4,5',() => {
        expect(sumPositiveElements([1, 2, 3, 4, 5])).toBe(15)
    })

    test('Sumatori de 1,-2,3,4,5', () => {
        expect(sumPositiveElements([1, -2, 3, 4, 5])).toBe(13)
    })

    test('Sumatori de -1,2,3,4,-5',() => {
        expect(sumPositiveElements([-1, 2, 3, 4, -5])).toBe(9)
    })

    test('Sumatori de -1,-2,-3,-4,-5',() => {
        expect(sumPositiveElements([-1, -2, -3, -4, -5])).toBe(0)
    })
})