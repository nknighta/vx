import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
//import * as React from "react";

import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function Model(prop: { src: string }) {

    const gltf = useLoader(GLTFLoader, prop.src);

    return <primitive object={gltf.scene} scale={6} />;
}

export const GltfLoadElement = () => {
    return (
        <div style={{
            height: "30vh",
        }}>
            <Canvas style={{
                height: "30vh",
            }}>
                <OrbitControls/>
                <ambientLight intensity={0.9} />
                <Model src="/land.gltf" />
            </Canvas>
        </div>
    );
};
