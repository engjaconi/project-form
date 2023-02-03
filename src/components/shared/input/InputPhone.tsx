import { PhoneIcon } from "@chakra-ui/icons";
import { FormControl, FormErrorMessage, FormHelperText, FormLabel, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useContext } from "react";

import { isValidPhone } from "../../../services/isValidPhone";
import { AppContext } from "../../AppContext";

export const InputPhone = () => {
    const { phone, setPhone } = useContext(AppContext);

    const changedPhone = (e: any) => setPhone(e.target.value);

    return (
        <FormControl
            isRequired
            isInvalid={!isValidPhone(phone)}
            width={'100%'}
        >
            <FormLabel>Telefone</FormLabel>
            <InputGroup>
                <InputLeftElement
                    pointerEvents='none'
                    children={<PhoneIcon color='gray.300' />}
                />
                <Input type='tel' value={phone} onChange={changedPhone} isRequired
                    maxLength={11} errorBorderColor='gray.300'
                />
            </InputGroup>
            {phone === '' || isValidPhone(phone) ? '' :
                phone.length < 10 ?
                    (
                        <FormHelperText>
                            O telefone está incompleto, digite apenas os números incluindo o DDD.
                        </FormHelperText>
                    ) : (
                        <FormErrorMessage>
                            O telefone contém caracteres inválidos.
                        </FormErrorMessage>
                    )}
        </FormControl>
    );
}