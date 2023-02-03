export function isValidCep(cep: string): boolean {
    let normalizedCep = cep.replaceAll('.', '').replaceAll('-', '');
    let expCep = /^[0-9]{8}$/;

    return expCep.test(normalizedCep);
}