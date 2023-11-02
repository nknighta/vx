import Viewer from "layout/viewer";
import HMeta from "components/headmeta";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
//import * as React from "react";

import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
const Home = () => {
    return (
        <Viewer>
            <HMeta pageTitle="Home"
                pageDescription="VARIUS development team"
                pageImg={"/header.png"} />
            <link href="https://fonts.googleapis.com/css2?family=REM:wght@500&display=swap" rel="stylesheet"></link>
            <GltfLoadElement />
        </Viewer>
    );
};

function Model(prop: { src: string }) {
    const gltf = useLoader(GLTFLoader, prop.src);
    return <primitive object={gltf.scene} scale={6} />;
}

const GltfLoadElement = () => {
    return (
        <div style={{
            width: "100%",
            height: "70vh",
            position: "relative",
        }}>
            <Canvas style={{
                height: "100%",
            }}>
                <OrbitControls/>
                <ambientLight intensity={0.9} />
                <Model src="/land.gltf" />
            </Canvas>
        </div>
    );
};

export default Home;