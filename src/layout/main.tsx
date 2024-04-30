import React from 'react';
import { Box, ChakraProvider, Grid, GridItem, Icon, Text } from '@chakra-ui/react';
import VARIUSHeader from 'components/header';
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import theme from './themes';
import { getWindowWidth } from '../scripts/getWidth';

const Layout = ({ children }: any) => {
    const width = getWindowWidth();

    const isMobile: boolean = width > 960 ? false : true;
    const isComlumn: boolean = width > 960 ? true : false;

    return (
        <ChakraProvider theme={theme}>
            <VARIUSHeader />
            {process.env.NODE_ENV == "development" ? (
                <>
                    debug mode
                    <div>
                        meta data
                        {width}
                    </div>
                </>
            ) : ("")}
            <div style={{
                padding: isMobile ? '0 3vh' : '0 10vh',
            }}>
                {children}
            </div>
            <footer
                style={{
                    margin: '0 auto',
                    padding: '8.2vh 30px 10vh 30px',
                    background: '#000000',
                }}>
                <Grid
                    templateColumns={isMobile ? 'repeat(1, 1fr)' : 'repeat(3, 1fr)'}
                    templateRows={isComlumn ? '' : 'repeat(3)'}
                    gap={4}
                >
                    <GridItem>
                        <Text
                            fontSize={20}
                            p={'10px 0'}>
                            Pages
                        </Text>
                        <Box>
                            <Text p={'3px 0'}>
                                <Link href={'/docs'}>
                                    Docs
                                </Link>
                            </Text>
                            <Text p={'3px 0'}>
                                <Link href={'/about'}>
                                    About
                                </Link>
                            </Text>
                            <Text p={'3px 0'}>
                                <Link
                                    href={'https://github.com/search?q=owner%3Anknighta+vx&type=repositories'}>
                                    Repositoryes - GitHub
                                </Link>
                            </Text>
                            <Text p={'3px 0'} width={"50%"}>
                                <Link href={'https://github.com/nknighta/vx-docs/wiki'}>
                                    Wiki - GitHub
                                </Link>
                            </Text>

                            <Text p={'3px 0'} width={"50%"}>
                                <Link href={'/blog'}>
                                    Blog
                                </Link>
                            </Text>
                        </Box>
                    </GridItem>
                    <GridItem>
                        <Text
                            fontSize={20}
                            p={'10px 0'}>
                            Social
                        </Text>
                        <div>
                            <Text p={'3px 0'}>
                                <Link href={'https://github.com/nknighta/'} target='_blank'>
                                    GitHub - nknighta
                                </Link>
                            </Text>
                            <Text p={'3px 0'}>
                                <Link href={'https://twitter.com/ama_dev_1/'} target='_blank'>
                                    Twitter (X) - @ama_dev_1
                                </Link>
                            </Text>
                            <Text p={'3px 0'}>
                                <Link href={'https://misskey.io/@nknighta/'} target='_blank'>
                                    Misskey.io - @nknighta
                                </Link>
                            </Text>
                            <Text p={'3px 0'}>
                                <Link href={'https://youtube.com/@ama_p213/'} target='_blank'>
                                    Youtube - @ama_p213
                                </Link>
                            </Text>
                        </div>
                    </GridItem>
                </Grid>
                <Box fontSize={12}>Made with ❤️ by Nknight 2023</Box>
                <Icon
                    as={AiFillGithub}
                    w={8}
                    h={8}
                    mt={2}
                    onClick={() => window.open('https://github.com/nknighta/vx-docs')}
                    cursor={'pointer'}
                />
            </footer>
        </ChakraProvider>
    );
};

export default Layout;
