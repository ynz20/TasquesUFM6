import { fibonacci } from './kata6'; // Assegura't d'importar correctament la funció

describe('Kata: Fibonacci', () => {
    test('fibonacci(0)', () => {
        expect(fibonacci(0)).toBe(0);
    });

    test('fibonacci(1)', () => {
        expect(fibonacci(1)).toBe(1);
    });

    test('fibonacci(2)', () => {
        expect(fibonacci(2)).toBe(1);
    });

    test('fibonacci(3)', () => {
        expect(fibonacci(3)).toBe(2);
    });

    test('fibonacci(4)', () => {
        expect(fibonacci(4)).toBe(3);
    });

    test('fibonacci(5)', () => {
        expect(fibonacci(5)).toBe(5);
    });

    test('fibonacci(6)', () => {
        expect(fibonacci(6)).toBe(8);
    });

    test('fibonacci(7)', () => {
        expect(fibonacci(7)).toBe(13);
    });

    test('fibonacci(8)', () => {
        expect(fibonacci(8)).toBe(21);
    });

    test('fibonacci(9)', () => {
        expect(fibonacci(9)).toBe(34);
    });

    test('fibonacci(10)', () => {
        expect(fibonacci(10)).toBe(55);
    });
});
