import { Flex, Text } from "@chakra-ui/react";
import { IconAssigment } from "./shared/img/IconAssignment";

export const Header = () => {
    return (
        <Flex
            backgroundColor='darkslategray'
            w={'100%'}
            padding={'10px'}
            justifyContent={'center'}
            align={'center'}
            gap={'20px'}
        >
            <IconAssigment />
            <Text
                color={'#FFF'}
                fontSize={'2rem'}
                fontFamily={'verdana'}
                display={'flex'}
            >Formulário de Cadastro</Text>
        </Flex>
    );
}