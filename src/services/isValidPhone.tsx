export function isValidPhone(phone: string): boolean {
    const regexPhone = /^[0-9]{10,11}$/;
    return regexPhone.test(phone);
}