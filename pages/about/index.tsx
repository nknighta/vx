import Image from "next/image";
import HMeta from "components/headmeta";
import MainLayout from "layout/main";
import {Box, Container, Flex, Text} from "@chakra-ui/react";
import {getWindowWidth} from "scripts/getWidth";
import GitHome from "../../components/fetchgithub";

const Home = () => {
    const width: number = getWindowWidth();
    const dpadding: number = width > 850 ? 60 : 0;
    const dflex: string = width > 850 ? "flex" : null;
    return (
        <MainLayout>
            <HMeta pageTitle={"About VARIUS"} pageImg={"/logo.png"}/>

            <link href="https://fonts.googleapis.com/css2?family=REM:wght@500&display=swap" rel="stylesheet"></link>
            <Container maxW={"container.xl"} background={"#fff"} color={"#000021"} pt={16} pb={16}>
                <div style={{
                    fontFamily: `REM`,
                    fontSize: 40,
                    paddingTop: 20,
                    paddingBottom: 20,
                }}>
                    About
                </div>
            </Container>
            <Box p={10}/>

            <Container maxW={"container.xl"}
                       fontFamily={"rem"} fontSize={29}
                       display={"flex"}
                       justifyContent={"center"}
                       alignItems={"center"}
                       height={100}>
                About VARIUS
            </Container>
            <Container>
                <Image
                    src='/logolong.png'
                    alt='logo'
                    width={1000}
                    height={0}
                    style={{
                        paddingLeft: dpadding + 10,
                        paddingRight: dpadding + 10,
                    }}/>
                <Box h={100}/>
                <Text p={3} wordBreak={"keep-all"} fontSize={22}>
                    VARIUS is student developer team in Japan. <wbr/>
                    We are developing Web3 Platform and Applications.
                    <wbr/>
                    We are mainly active on discord.
                </Text>
            </Container>
            <Container maxW={"container.xl"}
                       fontFamily={"rem"} fontSize={29}
                       display={"flex"}
                       justifyContent={"center"}
                       alignItems={"center"}
                       height={200}>
                WHO's Amamiya
            </Container>
            <Flex justifyContent={"center"}>
                <Image
                    src='/icon.png'
                    alt='logo'
                    width={400}
                    height={0}/>
            </Flex>
            <GitHome/>
        </MainLayout>
    );
};


export default Home;