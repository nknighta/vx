import { ReactNode } from "react";
import Layout from "layout/main";
import { Box, Center, Text } from "@chakra-ui/react";
import HMeta from "components/headmeta";
import { getWindowWidth } from "../scripts/getWidth";
const Home = () => {
    const width: number = getWindowWidth();
    const dpadding = width > 990 ? "10vh" : "3vh";
    const mode = width > 990 ? "flex" : "block";
    return (
        <>
            <HMeta pageTitle="Teamlog"
                pageDescription="VARIUS development team blog"
                pageImg={"/header.png"} />
            <link href="https://fonts.googleapis.com/css2?family=REM:wght@500&display=swap" rel="stylesheet"></link>
            <Box p={2}>
                <Text fontFamily={"REM"} fontSize={33} pl={dpadding} pt={10} pb={10}>
                    VARIUS Team official blog
                </Text>
                <Box h={100} pl={dpadding} fontSize={30}>
                    development
                </Box>
                <Box h={100} pl={dpadding}  fontSize={30}>
                    business
                </Box>
                <Box h={100} pl={dpadding}  fontSize={30}>
                    design
                </Box>
                <Box h={100} pl={dpadding} fontSize={30}>
                    new technology
                </Box>
            </Box>
        </>
    );
};

Home.getLayout = (page: ReactNode) => {
    return (
        <Layout>
            <Home />
        </Layout>
    )
};

export default Home;