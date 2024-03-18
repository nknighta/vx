import React from "react";
import { WagmiConfig } from "wagmi";
import { config } from "../scripts/metamaskConfig";
import VARIUSHeader from "../components/header";
import {
    ChakraProvider,
    Box,
    Link,
    Text,
} from "@chakra-ui/react";
import { getWindowWidth } from "scripts/getWidth";

const Layout = ({ children }) => {
    const width = getWindowWidth();
    return (
        <div style={{
            background: "#000012",
        }}>
            <ChakraProvider>
                <WagmiConfig config={config}>
                    <VARIUSHeader />
                    {children}
                </WagmiConfig>
            </ChakraProvider>
        </div>
    );
};

export default Layout;
