import {GltfLoadElement} from "components/gltfLoadElement";
import HMeta from "components/headmeta";
import MainLayout from "layout/main";
import {Box, Container, Text} from "@chakra-ui/react";
import {getWindowWidth} from "scripts/getWidth";
import {BasicElement} from "../../components/basicLayout";
import Link from "next/link";

const Home = () => {
    return (
        <MainLayout>
            <HMeta pageTitle={"Product"} pageImg={"/header.png"}/>

            <link href="https://fonts.googleapis.com/css2?family=REM:wght@500&display=swap" rel="stylesheet"></link>
            <Container maxW={"container.xl"} background={"#fff"} color={"#000021"} pt={16} pb={16}>
                <div style={{
                    fontFamily: `REM`,
                    fontSize: 40,
                    paddingTop: 20,
                    paddingBottom: 20,
                }}>
                    Release
                </div>
            </Container>
            <Box p={10}/>
            <Box p={6}>
                <Box>
                    <Link href={"/"}>
                        aaa
                    </Link>
                </Box>
            </Box>
        </MainLayout>
    );
};

export default Home;