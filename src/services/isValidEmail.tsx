export function isValidEmail(email: string): boolean {

    const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+?$/i;

    return regexEmail.test(email);
}