import {Html,Main,NextScript,Head} from "next/document";
import React, {useEffect} from "react";
import Link from "next/link";
import {Box,Text} from "@chakra-ui/react";
import { Analytics } from '@vercel/analytics/react';
import HMeta from "components/headmeta";
const MyDocument = () => {
    // test mode
    return (
        <Html>
            <Analytics />
            <Head>
                <title>VARIUS</title>
                <meta name="viewport" content="width=device-width,initial-scale=1.0" />
                <meta name="description" content={"VARIUS"} />
                <meta property="og:url" content={"https://dev.varius.technology"} />
                <meta property="og:title" content={"Home - VARIUS"} />
                <meta property="og:site_name" content={"VARIUS Awesome web3 development"} />
                <meta property="og:description" content={"Home - VARIUS"} />
                <meta property="og:type" content="website" />
                <meta property="og:image" content={`https://dev.varius.technology/header.png`} />
                <meta name="twitter:image" content={`https://dev.varius.technology/header.png`} />
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:site" content="@ama_dev_1"/>
                <link rel="icon" href={"https://dev.varius.technology/favicon.ico"} sizes="any" />
            </Head>
            <body style={{
                height: "auto",
                background: "#bbbbdd",
                color: "#000021",
            }}>
                <Main/>
                <NextScript/>
            </body>
            <Footer/>
        </Html>
    )
};

const Footer = () => {
    const [width, setWidth] = React.useState<number>(0);
    useEffect(() => {
        setWidth(window.innerWidth);
        window.addEventListener("resize", () => {
            setWidth(window.innerWidth);
        });

    },[width]);
    const date = new Date();
    const year = date.getFullYear();
    return (
        <footer>
            <div style={{
                padding: 10,
                margin: 20,
                display: "flex",
                justifyContent: "center",
            }}>
                <Box>
                    <Box>
                        Nknight AMAMIYA © {year}
                    </Box>
                    <Link href={"https://github.com/nknighta/"}>
                        <Text p={5}>
                            GitHub
                        </Text>
                    </Link>
                    <Link href={"https://twitter.com/ama_dev_1/"}>
                        <Text p={5}>
                            Twitter
                        </Text>
                    </Link>
                    <Link href={"https://youtube.com/@ama_p213/"}>
                        <Text p={5}>
                            Youtube
                        </Text>
                    </Link>
                    <Link href={"https://varius.technology/"}>
                        <Text p={5}>
                            Main Site
                        </Text>
                    </Link>
                </Box>
            </div>
        </footer>
    )
};
export default MyDocument;