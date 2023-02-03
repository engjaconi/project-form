import { isValidName } from "../isValidName";

describe('isValidName', () => {
    it('deve retornar falso se o nome conter números', () => {
        let testName = isValidName('T1ago');
        expect(testName).toBe(false);
    });

    it('deve retornar falso se houver caracteres inválidos', () => {
        let testName = isValidName('T!ago &43');
        expect(testName).toBe(false);
    });

    it('deve retornar falso se houver apenas números', () => {
        let testName = isValidName('123985 3658');
        expect(testName).toBe(false);
    });

    it('deve retornar verdadeiro se nome e sobrenomes', () => {
        let testName = isValidName('Tiago jaconi');
        expect(testName).toBe(true); 
    });

    it('deve retornar verdadeiro os nomes com acentuação', () => {
        let testName = isValidName('Kétlem Marçal');
        expect(testName).toBe(true);
    })

    it('deve retornar verdadeiro se apenas o primeiro nome', () => {
        let testName = isValidName('Tiago');
        expect(testName).toBe(true);
    })

});