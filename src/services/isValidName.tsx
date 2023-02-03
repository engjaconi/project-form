export function isValidName(name: string): boolean {
    const regexName = /^([a-zÀ-ü]){2,}( ([a-zÀ-ü])+)*$/i;
    return regexName.test(name);
}