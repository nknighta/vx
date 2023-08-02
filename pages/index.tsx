import {GltfLoadElement} from "components/gltfLoadElement";
import HMeta from "components/headmeta";
import MainLayout from "layout/main";
import {Box,Container} from "@chakra-ui/react";

const Home = () => {
    return (
        <MainLayout>
            <HMeta pageTitle={"DevHome"} pageImg={"/header.png"}/>
            <Box p={6}>
                <link href="https://fonts.googleapis.com/css2?family=REM:wght@500&display=swap" rel="stylesheet"></link>
                <div style={{
                    fontFamily: `REM`,
                    fontSize: 40,
                    paddingTop: 20,
                    paddingBottom: 20,
                }}>
                    Welcome web3 development experience.
                </div>
                <Box>
                    <div style={{
                        fontFamily: `REM`,
                        fontSize: 40,
                    }}>
                        Easy make Web3 and Metaverse Application Frameworks.
                    </div>
                </Box>
                <GltfLoadElement/>
            </Box>
        </MainLayout>
    );
};

export default Home;