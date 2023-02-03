import { Alert, AlertIcon, FormControl, FormHelperText, FormLabel, Input } from "@chakra-ui/react";
import { useContext, useState } from "react";

import { isValidCep } from "../../../services/isValidCep";
import { searchCep } from "../../../services/searchCep";
import { AppContext } from "../../AppContext";

export const InputDistrict = () => {
    const { district, setDistrict, cep } = useContext(AppContext);
    const [isError, setIsError] = useState<boolean>(false);

    const changedDistrict = (e: any) => setDistrict(e.target.value);

    if (isValidCep(cep) && district === '' && !isError) {
        autoFill();
    }

    async function autoFill() {
        const data = await searchCep(cep);
        if (data.bairro) {
            setDistrict(data.bairro);
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
            <FormLabel>Bairro</FormLabel>
            <Input
                type='text'
                value={district}
                onChange={changedDistrict}
                isRequired
                minLength={2}
                errorBorderColor='gray.300'
            />
            {district === '' ? '' :
                district.length < 2 ?
                    (
                        <FormHelperText>
                            O nome do bairro está incompleto!
                        </FormHelperText>
                    ) : ''
            }
            {isError && district === '' && isValidCep(cep) ?
                (<Alert status='error'>
                    <AlertIcon />
                    O cep informado não foi encontrado, digite o endereço manualmente.
                </Alert>)
                : ''}
        </FormControl>
    );
}