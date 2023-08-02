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
    Input,
    useDisclosure,
    Text
} from "@chakra-ui/react";
import Link from "next/link";

// breakpoint is 850px
// desktop menu is LightMenuDesktop
// mobile menu is LightMenu

// link array for title text
const pages = [
    {id: 1, name: "product", page: "/product"},
    {id: 2, name: "Software", page: "/"},
    {id: 3, name: "blog", page: "/"},
    {id: 4, name: "release", page: "/"}
];

export default function VARIUSHeader() {
    const [width, setWidth] = useState<number>(0);
    useEffect(() => {
        setWidth(window.innerWidth);
        window.addEventListener("resize", () => {
            setWidth(window.innerWidth);
        });
    }, [width]);

    const ResponseHeaderLayout = () => {
        if (width > 850) {
            return <LightMenuDesktop/>;
        } else {
            return <LightMenu/>;
        }
    };
    return (
        <Box bg={"#000012"} color={"#fff"} p={3}>
            <Flex>
                <Flex w={"50%"} p={3} alignContent={"center"}>
                    <Link href={"/"}>
                        <Text fontSize={"xl"}>VARIUS projects.</Text>
                    </Link>
                </Flex>
                <Flex w={"50%"} justifyContent={"flex-end"} alignItems={"center"}>
                    <ResponseHeaderLayout/>
                </Flex>

            </Flex>
        </Box>
    )
};

const LightMenu = () => {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const btnRef = React.useRef()
    return (
        <Box>
            <Button ref={btnRef} colorScheme='black' onClick={onOpen}>
                Menu
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
                        {
                            pages.map(
                                linkvalue => {
                                    return (
                                        <div key={linkvalue.id}>
                                            <Link as={`/${linkvalue.name}`}
                                                  href={`${linkvalue.page}`} style={{
                                                padding: 10
                                            }}>
                                                {linkvalue.name}
                                            </Link>
                                        </div>
                                    );
                                }
                            )
                        }
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


// for desktop link element
// map and array
function LightMenuDesktop() {
    return (
        <>
            {
                pages.map(
                    linkvalue => {
                        return (
                            <div key={linkvalue.id}>
                                <Link as={`/${linkvalue.name}`}
                                      href={`${linkvalue.page}`} style={{
                                          padding: 10
                                        }}>
                                    {linkvalue.name}
                                </Link>
                            </div>
                        );
                    }
                )
            }
        </>
    )
};