import { Alert, AlertIcon, FormControl, FormHelperText, FormLabel, Input } from "@chakra-ui/react";
import { useContext, useState } from "react";

import { isValidCep } from "../../../services/isValidCep";
import { searchCep } from "../../../services/searchCep";
import { AppContext } from "../../AppContext";

export const InputState = () => {
    const { state, setState, cep } = useContext(AppContext);
    const [isError, setIsError] = useState<boolean>(false);

    const changedState = (e: any) => setState(e.target.value);

    if (isValidCep(cep) && state === '' && !isError) {
        autoFill();
    }

    async function autoFill() {
        const data = await searchCep(cep);
        if (data.uf) {
            setState(data.uf);
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
            <FormLabel>Estado</FormLabel>
            <Input
                type='text'
                value={state}
                onChange={changedState}
                isRequired
                minLength={2}
                errorBorderColor='gray.300'
            />
            {state === '' ? '' :
                state.length < 2 ?
                    (
                        <FormHelperText>
                            O nome do estado está incompleto!
                        </FormHelperText>
                    ) : ''
            }
            {isError && state === '' && isValidCep(cep) ?
                (<Alert status='error'>
                    <AlertIcon />
                    O cep informado não foi encontrado, digite o endereço manualmente.
                </Alert>)
                : ''}
        </FormControl>
    );
}