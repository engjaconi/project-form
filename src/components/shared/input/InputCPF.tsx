import { FormControl, FormErrorMessage, FormLabel, Input } from "@chakra-ui/react";
import { useContext } from "react";

import { isValidCPF } from "../../../services/isValidCPF";
import { AppContext } from "../../AppContext";

export const InputCPF = () => {
    const { CPF, setCPF } = useContext(AppContext);

    const changedCPF = (e: any) => setCPF(e.target.value);

    return (
        <FormControl
            isRequired
            isInvalid={!isValidCPF(CPF)}
            width={'100%'}
        >
            <FormLabel>CPF</FormLabel>
            <Input type='text' value={CPF} onChange={changedCPF} isRequired errorBorderColor='gray.300' minLength={11} maxLength={14} />
            {CPF === '' || isValidCPF(CPF) ? '' : (
                <FormErrorMessage>CPF inválido!</FormErrorMessage>
            )}
        </FormControl>
    );
}