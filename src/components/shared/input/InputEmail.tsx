import { EmailIcon } from "@chakra-ui/icons";
import { FormControl, FormErrorMessage, FormLabel, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

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
            <InputGroup>
                <InputLeftElement
                    pointerEvents='none'
                    children={<EmailIcon color='gray.300' />}
                />
                <Input
                    type='email'
                    value={email}
                    onChange={changedEmail}
                    isRequired
                    errorBorderColor='gray.300'
                />
            </InputGroup>
            {email === '' || isValidEmail(email) ? '' :
                (
                    <FormErrorMessage>
                        Email inválido!
                    </FormErrorMessage>
                )}
        </FormControl>
    );
}