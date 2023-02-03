import { createContext, useEffect, useState } from "react"
import IUser from "../interfaces/IUser"

export const AppContext = createContext({} as IUser)

export const AppContextProvider = ({ children }: any) => {
    const [name, setName] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [CPF, setCPF] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [motherName, setMotherName] = useState<string>('');
    const [fatherName, setFatherName] = useState<string>('');
    const [cep, setCep] = useState<string>('');
    const [address, setAddress] = useState<string>('');
    const [district, setDistrict] = useState<string>('');
    const [city, setCity] = useState<string>('');
    const [state, setState] = useState<string>('');

    return (
        <AppContext.Provider value={{ name, setName, phone, setPhone, CPF, setCPF, email, setEmail, motherName, setMotherName, fatherName, setFatherName, cep, setCep, address, setAddress, district, setDistrict, city, setCity, state, setState }}>
            {children}
        </AppContext.Provider>
    )
}
