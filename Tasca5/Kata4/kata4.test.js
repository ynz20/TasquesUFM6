import { removeSpaces } from './kata4';

describe('Kata #4: Eliminar espais en blanc', () => {
    test('good morning', () => {
        expect(removeSpaces('good morning')).toBe("goodmorning");
    });

    test('carrot cake', () => {
        expect(removeSpaces(' carrot cake ')).toBe("carrotcake");
    });

    test('the abbot gave rice to the fox', () => {
        expect(removeSpaces('the abbot gave rice to the fox')).toBe("theabbotgavericetothefox");
    });
});
