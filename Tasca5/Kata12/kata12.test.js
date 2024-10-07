import { BetweenDates } from './kata12';

describe('Kata: Days Between Dates', () => {
    test('7 dies entre 2024-09-13 i 2024-09-20', () => {
        expect(BetweenDates('2024-09-13', '2024-09-20')).toBe(7);
    });

    test('7 dies entre 2023-12-25 i 2024-01-01', () => {
        expect(BetweenDates('2023-12-25', '2024-01-01')).toBe(7);
    });

    test('0 dies entre 2024-01-01 i 2024-01-01', () => {
        expect(BetweenDates('2024-01-01', '2024-01-01')).toBe(0);
    });
});
