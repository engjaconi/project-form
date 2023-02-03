export function isValidCep(cep: string): boolean {
    let normalizedCep = cep.replaceAll('.', '').replaceAll('-', '');
    if (normalizedCep.length != 8) { return false; }

    let expCep = /^[0-9]{8}$/;

    return expCep.test(normalizedCep);
}