import { IAddressViaCep } from "../interfaces/IAddressViaCep";

export async function searchCep(cep: string): Promise<IAddressViaCep> {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json`);

    try {
        const data:IAddressViaCep = await response.json();
        return data;
    } catch (error) {
        console.log(error)
    } 
}