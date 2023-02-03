import { Alert, AlertIcon, FormControl, FormHelperText, FormLabel, Input } from "@chakra-ui/react";
import { useContext, useState } from "react";

import { isValidCep } from "../../../services/isValidCep";
import { searchCep } from "../../../services/searchCep";
import { AppContext } from "../../AppContext";

export const InputAddress = () => {
    const { address, setAddress, cep } = useContext(AppContext);
    const [isError, setIsError] = useState<boolean>(false);

    const changedAddress = (e: any) => setAddress(e.target.value);

    if (isValidCep(cep) && address == '' && !isError) {
        autoFill();
    }

    async function autoFill() {
        const data = await searchCep(cep);
        if (data.logradouro) {
            setAddress(data.logradouro);
            return;
        } else {
            setIsError(true);
            return;
        }
    }

    return (
        <FormControl
            width={'100%'}
        >
            <FormLabel>Endereço</FormLabel>
            <Input
                type='text'
                value={address}
                onChange={changedAddress}
                minLength={2}
                errorBorderColor='gray.300'
            />
            {address === '' ? '' :
                address.length < 2 ?
                    (
                        <FormHelperText>
                            O endereço está incompleto!
                        </FormHelperText>
                    ) : ''
            }
            {isError && address == '' && isValidCep(cep) ?
                (<Alert status='error'>
                    <AlertIcon />
                    O Cep informado não foi encontrado, digite o endereço manualmente.
                </Alert>)
                : ''}
        </FormControl>
    );
}