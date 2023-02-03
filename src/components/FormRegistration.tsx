import {
    Alert,
    AlertIcon,
    Button,
    Flex,
} from '@chakra-ui/react';
import { useContext, useState } from 'react';

import { isValidName } from "../services/isValidName";
import { AppContext } from "./AppContext";
import { InputName } from "./shared/input/InputName";
import { InputPhone } from "./shared/input/InputPhone";
import { isValidPhone } from "../services/isValidPhone";
import { InputEmail } from "./shared/input/InputEmail";
import { isValidEmail } from "../services/isValidEmail";
import { InputCPF } from "./shared/input/InputCPF";
import { InputMotherName } from "./shared/input/InputMotherName";
import { InputFatherName } from "./shared/input/InputFatherName";
import { InputCep } from "./shared/input/InputCep";
import { InputAddress } from "./shared/input/InputAddress";
import { isValidCep } from "../services/isValidCep";
import { InputDistrict } from "./shared/input/InputDistrict";
import { InputCity } from "./shared/input/InputCity";
import { InputState } from "./shared/input/InputState";
import { isValidCPF } from "../services/isValidCPF";

export const FormRegistration = () => {
    const [isFormSend, setIsFormSend] = useState<boolean>(false);
    const userContext = useContext(AppContext);

    let isError = !isValidName(userContext.name) || !isValidPhone(userContext.phone) || !isValidEmail(userContext.email) || !isValidCPF(userContext.CPF) || !isValidCep(userContext.cep);

    return (
        <Flex
            direction={'column'}
            width={'80%'}
            maxWidth={'600px'}
            gap={'10px'}
        >
            <InputName />
            <InputPhone />
            <InputCPF />
            <InputEmail />
            <InputMotherName />
            <InputFatherName />
            <InputCep />
            <InputAddress />
            <InputDistrict />
            <InputCity />
            <InputState />

            <Button
                isDisabled={isError}
                mt={4}
                colorScheme='blackAlpha'
                type='submit'
                onClick={() => {
                    console.log('Usuário cadastrado:', userContext);
                    setIsFormSend(true);
                    setTimeout(() => {
                        userContext.setName('');
                        userContext.setPhone('');
                        userContext.setCPF('');
                        userContext.setEmail('');
                        userContext.setMotherName('');
                        userContext.setFatherName('');
                        userContext.setCep('');
                        userContext.setAddress('');
                        userContext.setDistrict('');
                        userContext.setCity('');
                        userContext.setState('');
                        setIsFormSend(false);
                    }, 3000);
                }}
            >
                Enviar
            </Button>
            {isFormSend ? (
                <Alert status='success'>
                    <AlertIcon />
                    Formulário enviado com sucesso
                </Alert>
            ) : ''}
        </Flex>
    );
}