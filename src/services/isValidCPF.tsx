export function isValidCPF(CPF: string): boolean {
    let sum = 0;
    let rest = 0;

    var cpf = String(CPF).replace(/[^\d]/g, '');

    if (cpf.length !== 11) { return false; }

    if ([
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999',
    ].indexOf(cpf) !== -1) { return false; }

    for (let i = 1; i <= 9; i++) {
        sum = sum + parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }
    rest = (sum * 10) % 11;

    if ((rest === 10) || (rest === 11)) { rest = 0; }

    if (rest !== parseInt(cpf.substring(9, 10))) { return false; }

    sum = 0;

    for (let i = 1; i <= 10; i++) {
        sum = sum + parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }

    rest = (sum * 10) % 11;

    if ((rest === 10) || (rest === 11)) { rest = 0; }

    if (rest !== parseInt(cpf.substring(10, 11))) { return false }

    return true
}
