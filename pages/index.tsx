import {ReactNode ,useEffect,useState} from "react";
import ThreeBox from "components/threebox";
import HMeta from "components/headmeta";
import Layout from "layout/main";
import { Flex } from "@chakra-ui/react";
import prevImg from "public/images/header.png";

export default function Home () {
    
    return (
        <>
            <HMeta 
                pageTitle={"Welcome"} 
                pageImg={prevImg}
                pageImgWidth={1280}
                pageImgHeight={720}
                pagePath="https://varius.technology/"
                pageDescription="Hello World!"
            />
            <div style={{
                display: "flex",
                justifyContent: "center",
                position: "relative",
                color: "black",
                height: "600px",
            }}>
                <div style={{
                    position: "absolute",
                    width: "100%",
                }}>
                    <ThreeBox />
                </div>
                <div style={{
                    position: "absolute",
                    width: "100%",
                    height: "50vh",
                    fontSize: "4.3rem",
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    padding: 50,
                    margin: 50,
                    color: "#fff"
                }}>
                    Welcome Web3 development.
                </div>
            </div>
            <Flex justifyContent={"center"} color={"#fff"} fontSize={35}>
                Make Platform now!
            </Flex>
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