export interface IUser {
    name: string,
    phone: string,
    CPF: string,
    email: string,
    motherName?: string,
    fatherName?: string,
    cep: string,
    address?: string,
    district?: string,
    city?: string,
    state?: string,
    setName: (name: string) => void
    setPhone: (name: string) => void
    setCPF: (name: string) => void
    setEmail: (name: string) => void
    setMotherName: (name: string) => void
    setFatherName: (name: string) => void
    setCep: (name: string) => void
    setAddress: (name: string) => void
    setDistrict: (name: string) => void
    setCity: (name: string) => void
    setState: (name: string) => void
}

export default IUser;