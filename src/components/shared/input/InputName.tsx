import { FormControl, FormErrorMessage, FormHelperText, FormLabel, Input } from "@chakra-ui/react";
import { useContext } from "react";

import { isValidName } from "../../../services/isValidName";
import { AppContext } from "../../AppContext";

export const InputName = () => {
    const { name, setName } = useContext(AppContext);

    const changedName = (e: any) => setName(e.target.value);

    return (
        <FormControl
            isRequired
            isInvalid={!isValidName(name)}
            width={'100%'}
        >
            <FormLabel>Nome</FormLabel>
            <Input
                type='text'
                value={name}
                onChange={changedName}
                isRequired
                minLength={2}
                errorBorderColor='gray.300'
            />
            {name === '' || isValidName(name) ? '' :
                name.length < 2 ?
                    (
                        <FormHelperText>
                            O nome está incompleto, deve possuir acima de 2 letras!
                        </FormHelperText>
                    ) : (
                        <FormErrorMessage>
                            O nome contém caracteres inválidos, certifique que não contenha espaço no inicio e fim.
                        </FormErrorMessage>
                    )}
        </FormControl>
    );
}