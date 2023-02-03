import { isValidPhone } from "../isValidPhone";

describe('isValidPhone', () => {
    it('deve retornar falso se houver letras', () => {
        let textPhone = isValidPhone('25sd8aad66');
        expect(textPhone).toBe(false);
    });

    it('deve retornar falso se houver caracteres inválidos', () => {
        let textPhone = isValidPhone('+/*2365874');
        expect(textPhone).toBe(false);
    });

    it('deve retornar falso se houver menos que 10 números', () => {
        let textPhone = isValidPhone('279920');
        expect(textPhone).toBe(false);
    });

    it('deve retornar falso se houver mais que 11 números', () => {
        let textPhone = isValidPhone('279920888922');
        expect(textPhone).toBe(false);
    });

    it('deve retornar verdadeiro se número de celular com DDD', () => {
        let textPhone = isValidPhone('27992022890');
        expect(textPhone).toBe(true);
    });

    it('deve retornar verdadeiro se número fixo com DDD', () => {
        let textPhone = isValidPhone('2733443333');
        expect(textPhone).toBe(true);
    });
});