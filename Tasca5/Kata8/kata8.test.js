import { updateBalance } from './kata8';

describe('Kata: Actualitzar saldo', () => {
    test('updateBalance(100, [50, -20, 30, -10])', () => {
        expect(updateBalance(100, [50, -20, 30, -10])).toBe(150);
    });

    test('updateBalance(200, [-50, -30, 20])', () => {
        expect(updateBalance(200, [-50, -30, 20])).toBe(140);
    });

    test('updateBalance(500, [100, -200, -50, 100])', () => {
        expect(updateBalance(500, [100, -200, -50, 100])).toBe(450);
    });
});
