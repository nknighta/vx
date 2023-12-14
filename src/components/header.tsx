import React, {useEffect, useState} from "react";
import {
    Box,
    Button,
    Flex,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Link ,
    useDisclosure,
    Text
} from "@chakra-ui/react";
import {getWindowWidth} from "../scripts/getWidth";
import {AccountDisp} from "./accountDisp";
import {HamburgerIcon} from "@chakra-ui/icons";
import  {useRouter } from "next/router";
import NextLink from "next/link";
// breakpoint is 850px
// desktop menu is LightMenuDesktop
// mobile menu is LightMenu


export default function VARIUSHeader() {
    const width:number = getWindowWidth();
    const dpadding = width > 990 ? "10vh" : "3vh";
    return (
        <Box bg={"#000012"} color={"#fff"} p={3} pl={dpadding} pr={dpadding}>
            <Flex>
                <Flex w={"50%"} p={3} alignContent={"center"}>
                    <Link href={"/"}>
                        <Text fontSize={"xl"}>VARIUS projects.</Text>
                    </Link>
                </Flex>
                <Flex w={"50%"} justifyContent={"flex-end"} alignItems={"center"}>
                    <LightMenu/>
                    <AccountDisp />
                </Flex>
            </Flex>
        </Box>
    )
};

const LightMenu = () => {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const btnRef = React.useRef()
    const router = useRouter();
    return (
        <Box>
            <Button ref={btnRef} colorScheme='black' onClick={onOpen} fontSize={30} w={45} h={45} ml={4} mr={4}>
                <HamburgerIcon/>
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay/>
                <DrawerContent
                    backgroundColor={"#000016"}
                    color={"#fff"}>
                    <DrawerCloseButton/>
                    <DrawerHeader>Menu</DrawerHeader>

                    <DrawerBody>
                        <NextLink href={"/"} onClick={onClose}>
                            <Link>
                                Home
                            </Link>
                        </NextLink>
                        <Box p={2}/>
                    
                        <NextLink href={"/dashboard"} onClick={onClose}>
                            <Link>
                                Dashboard
                            </Link>
                        </NextLink>
                    </DrawerBody>

                    <DrawerFooter>
                        <Button variant='outline' mr={3} onClick={onClose} colorScheme="white">
                            Close
                        </Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </Box>
    )
};

