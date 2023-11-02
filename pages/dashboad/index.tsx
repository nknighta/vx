import Layout from "../../layout/main";
import {ReactNode} from "react";
import {Box} from "@chakra-ui/react";
import HMeta from "../../components/headmeta";

export default function Index() {
    return (
        <Box>
            <HMeta pageTitle={"Dashboard"}/>
            <Box h={100} bgColor={"#111134"} m={10}>

            </Box>
        </Box>
    )
}


Index.getLayout = (page: ReactNode) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
};
