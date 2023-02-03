import { FormControl, FormErrorMessage, FormHelperText, FormLabel, Input } from "@chakra-ui/react";
import { useContext } from "react";

import { isValidName } from "../../../services/isValidName";
import { AppContext } from "../../AppContext";

export const InputMotherName = () => {
    const { motherName, setMotherName } = useContext(AppContext);

    const changedName = (e: any) => setMotherName(e.target.value);

    return (
        <FormControl
            isInvalid={!isValidName(motherName)}
            width={'100%'}
        >
            <FormLabel>Nome da Mãe</FormLabel>
            <Input
                type='text'
                value={motherName}
                onChange={changedName}
                minLength={2}
                errorBorderColor='gray.300'
            />
            {motherName === '' || isValidName(motherName) ? '' :
                motherName.length < 2 ?
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