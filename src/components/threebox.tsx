import * as THREE from 'three'
import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

const TestBox = ({ props }: any) => {
  const mesh = useRef<THREE.Mesh>(null!)
  useFrame(() => (mesh.current.rotation.y = mesh.current.rotation.z = mesh.current.rotation.x += 0.001))

  return (
    <mesh {...props} ref={mesh}>
      <boxGeometry args={[4, 4, 4]} />
      <meshStandardMaterial color={'purple'} />
    </mesh>
  )
}

const ThreeBox = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        position: 'fixed',
        height: '600px',
        width: '100%',
        zIndex: -1,
      }}
    >
      <Canvas
        style={{
          height: '900px',
          width: '100%',
        }}
      >
        <ambientLight />
        <color attach="background" args={['#000011']} />
        <pointLight position={[-90, 0, -30]} />
        <TestBox />
      </Canvas>
    </div>
  )
}

export default ThreeBox
