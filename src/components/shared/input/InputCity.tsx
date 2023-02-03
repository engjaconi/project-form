import { Alert, AlertIcon, FormControl, FormHelperText, FormLabel, Input } from "@chakra-ui/react";
import { useContext, useState } from "react";

import { isValidCep } from "../../../services/isValidCep";
import { searchCep } from "../../../services/searchCep";
import { AppContext } from "../../AppContext";

export const InputCity = () => {
    const { city, setCity, cep } = useContext(AppContext);
    const [isError, setIsError] = useState<boolean>(false);

    const changedCity = (e: any) => setCity(e.target.value);

    if (isValidCep(cep) && city === '' && !isError) {
        autoFill();
    }

    async function autoFill() {
        const data = await searchCep(cep);
        if (data.localidade) {
            setCity(data.localidade);
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
            <FormLabel>Cidade</FormLabel>
            <Input
                type='text'
                value={city}
                onChange={changedCity}
                isRequired
                minLength={2}
                errorBorderColor='gray.300'
            />
            {city === '' ? '' :
                city.length < 2 ?
                    (
                        <FormHelperText>
                            O nome da cidade está incompleto!
                        </FormHelperText>
                    ) : ''
            }
            {isError && city === '' && isValidCep(cep) ?
                (<Alert status='error'>
                    <AlertIcon />
                    O cep informado não foi encontrado, digite o endereço manualmente.
                </Alert>)
                : ''}
        </FormControl>
    );
}