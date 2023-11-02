import React from "react";
import { theme } from "../components/chakra-extends";
import { ChakraProvider } from "@chakra-ui/react";
import VARIUSHeader from "components/header";

interface Props {
    children: React.ReactNode;
};

const Viewer: React.FC<Props> = ({ children }) => {
    return (
        <div>
            <ChakraProvider theme={theme}>
                <VARIUSHeader />
                {children}
            </ChakraProvider>
        </div>
    );
}

export default Viewer;