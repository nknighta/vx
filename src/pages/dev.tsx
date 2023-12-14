import { ReactNode, useEffect } from "react";
import Layout from "layout/main";
import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Link from "next/link";
const Home = () => {
    const router = useRouter();
    useEffect(() => {
        router.push("https://dev.varius.technology/");
    }, []);
    return (
        <>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "50vh"
            }}>
                <Box>
                    redirect to home...
                </Box>
            </div>

            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "10vh"
            }}>
                <Box>
                    no redirect? click
                </Box>
                <Link href="https://varius.technology/">
                    {" => "}here
                </Link>
            </div>
        </>
    )
};

Home.getLayout = (page: ReactNode) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
};

export default Home;