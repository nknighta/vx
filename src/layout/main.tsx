import React from 'react';
import { WagmiConfig } from 'wagmi';
import { config } from 'scripts/metamaskConfig';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import VARIUSHeader from '../components/header';
import Footer from '../components/footer';
import theme from './themes';

const Layout = ({ children }) => {
    return (
        <div>
            <ChakraProvider theme={theme}>
                <VARIUSHeader />
                <WagmiConfig config={config}>{children}</WagmiConfig>
                <footer>
                    <Footer />
                </footer>
            </ChakraProvider>
        </div>
    );
};

export default Layout;
