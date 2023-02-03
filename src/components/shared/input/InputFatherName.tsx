import { FormControl, FormErrorMessage, FormHelperText, FormLabel, Input } from "@chakra-ui/react";
import { useContext } from "react";

import { isValidName } from "../../../services/isValidName";
import { AppContext } from "../../AppContext";

export const InputFatherName = () => {
    const { fatherName, setFatherName } = useContext(AppContext);

    const changedName = (e: any) => setFatherName(e.target.value);

    return (
        <FormControl
            isInvalid={!isValidName(fatherName)}
            width={'100%'}
        >
            <FormLabel>Nome do Pai</FormLabel>
            <Input
                type='text'
                value={fatherName}
                onChange={changedName}
                minLength={2}
                errorBorderColor='gray.300'
            />
            {fatherName === '' || isValidName(fatherName) ? '' :
                fatherName.length < 2 ?
                    (
                        <FormHelperText>
                            O nome está incompleto!
                        </FormHelperText>
                    ) : (
                        <FormErrorMessage>
                            O nome contém caracteres inválidos
                        </FormErrorMessage>
                    )}
        </FormControl>
    );
}