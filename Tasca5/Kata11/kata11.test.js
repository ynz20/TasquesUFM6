import { calculateCircleArea } from "./kata11";

describe('Kata 11: Object Math', () => {
    test('Radi 5', () => {
        expect(calculateCircleArea(5)).toBe(78.53981633974483);
    });

    test('Radi 10', () => {
        expect(calculateCircleArea(10)).toBe(314.1592653589793);
    });

    test('Radi 0', () => {
        expect(calculateCircleArea(0)).toBe(0);
    });

});