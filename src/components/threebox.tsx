import * as THREE from "three";
import {useRef} from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { getWindowWidth } from "scripts/getWidth";

const TestBox= ({props}:any) => {
    const mesh = useRef<THREE.Mesh>(null!);
    useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.008));

    return (
        <mesh
            {...props}
            ref={mesh}>
                <boxGeometry args={[2,2,2]} />
                <meshStandardMaterial color={"purple"} />
        </mesh>
    );
};

const ThreeBox = () => {
    const widh = getWindowWidth();
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
            color: "black",
            height: "600px",
        }}>
                <Canvas style={{
                    height: "60vh",
                }}>
                    <ambientLight />
                    <color attach="background" args={["#000011"]} />
                    <pointLight position={[-90, 0, -30]} />
                    <TestBox/>
                </Canvas>
            <div style={{
                position: "absolute",
                width: "100%",
                height: "50vh",
                fontSize: "4.3rem",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                padding: widh > 968 ? "0 10vw" : "0 1vw",
                margin: 30,
                color: "#fff"
            }}>
                Welcome Web3 development.
            </div>
        </div>
    )
};

export default ThreeBox;