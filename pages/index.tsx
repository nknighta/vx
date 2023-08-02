import {ReactNode} from "react";
import ThreeBox from "components/threebox";
import Layout from "layout/main";
import IndexElementLayout from "layout/indexpage/indexElementLayout";
import {GltfLoadElement} from "../components/gltfLoadElement";
import HMeta from "../components/headmeta";


const Home = () => {
    return (
        <>
            <HMeta pageTitle={"txt"}/>
            <link href="https://fonts.googleapis.com/css2?family=REM:wght@500&display=swap" rel="stylesheet"></link>
            <ThreeBox/>
            <IndexElementLayout/>
            <GltfLoadElement/>
        </>
    );
};

Home.getLayout = (page: ReactNode) => {
    return (
        <Layout>
            <Home/>
        </Layout>
    )
};

export default Home;