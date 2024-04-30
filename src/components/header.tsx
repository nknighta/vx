import React from 'react';
import {
    Flex,
    Link,
    Box,
    Text
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { Icon } from '@chakra-ui/react';
// breakpoint is 850px
// desktop menu is LightMenuDesktop
// mobile menu is LightMenu
import { BiWalletAlt } from 'react-icons/bi';
import LightMenu from './hmenu';
import Image from "next/image";

export default function VARIUSHeader() {
    const router = useRouter();
    return (
        <Flex
            w={"100%"}
            h={"80px"}
            bg={'#000012'}
            color={'#fff'}
            justifyContent={"space-between"}
            p={"0.7vh 3vh"}>
            <Box p={"13px 0"}>
                <Link href={'/'}
                    style={{
                        fontSize: "20px"
                    }}>
                    <Box display={"flex"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                        w={"120px"}
                    >
                        <p>VX</p>
                        | 
                        <p>VARIUS.</p>
                    </Box>
                </Link>
            </Box>
            <Flex
                height={"100%"}
                justifyContent={'flex-end'}
                alignItems={"center"}>
                <LightMenu />
                <button
                    style={{
                        width: "50px",
                        height: "50px"
                    }}
                    onClick={() => {
                        router.push('/dashboard');
                    }}>
                </button>
            </Flex>

        </Flex>
    );
}

