import {GltfLoadElement} from "components/gltfLoadElement";
import HMeta from "components/headmeta";
import MainLayout from "layout/main";
import {Box, Container, Text} from "@chakra-ui/react";
import {getWindowWidth} from "scripts/getWidth";

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
                        Product
                    </div>
                </Container>
                <Box p={10}/>
            <Box p={6}>
                <Box>
                    <Container maxW={"container.xl"} background={"#ffffff43"} fontFamily={"rem"} fontSize={29}
                               textAlign={"center"}>
                        Application
                    </Container>
                    <WorksBasicElement workstitle={"V - official App"}>
                        V is Official App for VX and ЯealtyX.
                    </WorksBasicElement>

                    <WorksBasicElement workstitle={"VX - Global Web3 Platform"}>
                        VX is Global Web3 Platform.
                    </WorksBasicElement>

                    <WorksBasicElement workstitle={"XC - Powerfull Backend"}>
                        Powerful distributed PaaS and SaaS development environment for Web3 applications
                    </WorksBasicElement>

                    <Container maxW={"container.xl"} background={"#ffffff43"} fontFamily={"rem"} fontSize={29}
                               textAlign={"center"}>
                        Tools
                    </Container>
                    <WorksBasicElement workstitle={"Tunnel"}>
                        Cross Platform Developent Tool.
                    </WorksBasicElement>
                </Box>
            </Box>
        </MainLayout>
    );
};

const WorksBasicElement = ({children, workstitle}: { children: any, workstitle: string }) => {
    const width:number = getWindowWidth();
    const dpadding:number = width > 850 ? 60 : 0;
    return (
        <div style={{
            marginTop: 30,
            marginBottom: 30,
            marginLeft: dpadding,
            marginRight: dpadding,
        }}>
            <Text fontFamily={"rem"} fontSize={29} textAlign={"center"} p={4}>
                {workstitle}
            </Text>
            <Text fontSize={23} textAlign={"center"} p={4} >
                {children}
            </Text>
        </div>
    )
};

export default Home;