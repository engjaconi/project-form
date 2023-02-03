import { FormControl, FormErrorMessage, FormHelperText, FormLabel, Input, InputGroup } from "@chakra-ui/react";
import { useContext } from "react";

import { isValidCep } from "../../../services/isValidCep";
import { AppContext } from "../../AppContext";

export const InputCep = () => {
    const { cep, setCep } = useContext(AppContext);

    const changedCep = (e: any) => setCep(e.target.value);

    return (
        <FormControl
            isRequired
            isInvalid={!isValidCep(cep)}
            width={'100%'}
        >
            <FormLabel>Cep</FormLabel>
            <InputGroup>
                <Input
                    type='tel'
                    value={cep}
                    onChange={changedCep}
                    isRequired
                    maxLength={10}
                    errorBorderColor='gray.300'
                />
            </InputGroup>
            {cep === '' || isValidCep(cep) ? '' :
                cep.length < 8 ?
                    (
                        <FormHelperText>
                            O cep está incompleto!
                        </FormHelperText>
                    ) : (
                        <FormErrorMessage>
                            O cep contém carcteres inválidos.
                        </FormErrorMessage>
                    )}
        </FormControl>
    );
}