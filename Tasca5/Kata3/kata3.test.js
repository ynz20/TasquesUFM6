import { removeFirstAndLast } from './kata3';

describe('Kata #3: Eliminar primera i última lletra', () => {
    test('JavaScript', () => {
        expect(removeFirstAndLast('JavaScript')).toBe("avaScrip");
    });

    test('Alexandria', () => {
        expect(removeFirstAndLast('Alexandria')).toBe("lexandri");
    });

    test('hydrogen', () => {
        expect(removeFirstAndLast('hydrogen')).toBe("ydroge");
    });

    test('ok', () => {
        expect(removeFirstAndLast('ok')).toBe("ok");
    });
});
