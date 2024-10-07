import { fizzBuzz } from './kata7';

describe('Kata: BobEsponja', () => {
    test('fizzBuzz(3)', () => {
        expect(fizzBuzz(3)).toBe('Bob');
    });

    test('fizzBuzz(5)', () => {
        expect(fizzBuzz(5)).toBe('Esponja');
    });

    test('fizzBuzz(15)', () => {
        expect(fizzBuzz(15)).toBe('BobEsponja');
    });

    test('fizzBuzz(7)', () => {
        expect(fizzBuzz(7)).toBe(7);
    });
});
