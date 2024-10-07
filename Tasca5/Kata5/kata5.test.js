import {counter} from './kata5'

describe('Kata #5.1: Counter closure', () => {
    test('Primer increment', () => {
        const count = counter();
        expect(count()).toBe(1);
    });

    test('Segon increment', () => {
        const count = counter();
        count(); // 1
        expect(count()).toBe(2);
    });

    test('Tercer increment', () => {
        const count = counter();
        count(); // 1
        count(); // 2
        expect(count()).toBe(3);
    });
});
