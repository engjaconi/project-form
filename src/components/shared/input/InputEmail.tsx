import { FormControl, FormErrorMessage, FormHelperText, FormLabel, Input } from "@chakra-ui/react";

import { useContext } from "react";
import { isValidEmail } from "../../../services/isValidEmail";
import { AppContext } from "../../AppContext";

export const InputEmail = () => {
    const { email, setEmail } = useContext(AppContext);

    const changedEmail = (e: any) => setEmail(e.target.value);

    return (
        <FormControl
            isRequired
            isInvalid={!isValidEmail(email)}
            width={'100%'}
        >
            <FormLabel>Email</FormLabel>
            <Input
                type='email'
                value={email}
                onChange={changedEmail}
                isRequired
                errorBorderColor='gray.300'
            />
            {email === '' || isValidEmail(email) ? '' :
                (
                    <FormErrorMessage>
                        Email inválido!
                    </FormErrorMessage>
                )}
        </FormControl>
    );
}