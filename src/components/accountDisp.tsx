import React from 'react';
import {Box, Flex, Button, Icon} from '@chakra-ui/react';
import {AccountDataType} from "../types/datatypes";
import {useRouter} from "next/router";
import {BiWalletAlt} from "react-icons/bi";;
export const  AccountDisp = () => {
    const router = useRouter();
    return (
        <Box bgColor={"#6a17a1"} width={45} borderRadius={50}>
            <Flex p={1} alignItems={"center"} justifyContent={"center"}>
                <Button borderRadius={50} onClick={() => {
                    router.push("/home")
                }}>
                    <Icon as={BiWalletAlt} color={"#6a17a1"} w={6} h={6}/>
                </Button>
            </Flex>
        </Box>
    )
};