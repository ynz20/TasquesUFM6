import { calculator } from './kata9';

describe('Kata: Calculadora simple', () => {
    test('calculator(2, \'+\', 3)', () => {
        expect(calculator(2, '+', 3)).toBe(5);
    });

    test('calculator(5, \'-\', 2)', () => {
        expect(calculator(5, '-', 2)).toBe(3);
    });

    test('calculator(3, \'*\', 4)', () => {
        expect(calculator(3, '*', 4)).toBe(12);
    });

    test('calculator(10, \'/\', 2)', () => {
        expect(calculator(10, '/', 2)).toBe(5);
    });
});
