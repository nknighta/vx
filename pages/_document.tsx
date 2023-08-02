import {Html,Main,NextScript,Head} from "next/document";
import React, {useEffect} from "react";
import Link from "next/link";
import {Box,Text} from "@chakra-ui/react";
import MetaDataElement from "components/headmeta";
const MyDocument = () => {
    // test mode
    return (
        <Html>
            <Head>
                <meta name="viewport" content="width=device-width,initial-scale=1.0" />
            </Head>
            <body style={{
                height: "auto",
                background: "#000021",
                color: "#fff",
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
                        Nknight AMAMIYA © 2023 - {year}
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
                </Box>
            </div>
        </footer>
    )
};
export default MyDocument;