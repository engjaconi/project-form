export function isValidPhone(phone: string): boolean {

    const regexPhone = /^[1-9]+?$/i;

    if (phone.length < 10) { return false; }
    return regexPhone.test(phone);
}