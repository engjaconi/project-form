export function isValidName(name: string): boolean {

    const regexName = /^[a-z]+?$/i;

    if (name.length < 2) { return false;}
    return regexName.test(name);
}