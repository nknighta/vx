import * as THREE from 'three'
import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

const TestBox = ({ props }: any) => {
  const mesh = useRef<THREE.Mesh>(null!)
  useFrame(() => (mesh.current.rotation.y = mesh.current.rotation.z = mesh.current.rotation.x += 0.001))

  return (
    <mesh {...props} ref={mesh}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={'darkblue'} />
    </mesh>
  )
}

const ThreeBox = () => {
  return (
    <div
      style={{
        height: '80vh',
        width: '130vw',
        position: 'fixed',
        zIndex: -1,
      }}
    >
      <Canvas>
        <ambientLight />
        <pointLight position={[-90, 0, -30]} />
        <TestBox />
      </Canvas>
    </div>
  )
}

export default ThreeBox
