import { isValidCep } from "../isValidCep";

describe('isValidCep', () => {
    it('deve retornar falso se o cep tiver menos que 8 números', () => {
        let testCep = isValidCep('12345');
        expect(testCep).toBe(false);
    });

    it('deve retornar falso se o cep tiver mais que 8 números', () => {
        let testCep = isValidCep('123456789');
        expect(testCep).toBe(false);
    });

    it('deve retornar falso se o cep tiver caracteres inválidos', () => {
        let testCep = isValidCep('12a*/5adf');
        expect(testCep).toBe(false);
    });

    it('deve retornar verdadeiro se o cep tiver 8 números', () => {
        let testCep = isValidCep('12345678');
        expect(testCep).toBe(true);
    });

    it('deve retornar verdadeiro se o cep tiver 8 números e sinais de separação', () => {
        let testCep = isValidCep('123.456-78');
        expect(testCep).toBe(true);
    });
});