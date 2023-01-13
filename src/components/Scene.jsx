import { useRef } from 'react'
import { Canvas, useFrame, extend, useThree } from '@react-three/fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

extend({ OrbitControls })

export default function Scene () {
  const { camera, gl } = useThree()
  const groupRef = useRef()
  const cubeRef = useRef()

  useFrame((state, delta) => {
    cubeRef.current.rotation.y += delta
  })

  return (
    <>
      <orbitControls args={[camera, gl.domElement]}/>
      <directionalLight position={[1,2,3]} />
      <ambientLight intensity={0.5}/>
      <group ref={groupRef}>
        <mesh position-x={-2}>
          <sphereGeometry/>
          <meshStandardMaterial color={'orange'}/>
        </mesh>
        <mesh ref={cubeRef} rotation-y={3.14 * 0.25} position-x={2} scale={1.5}>
          <boxGeometry scale={1.5}/>
          <meshStandardMaterial color={'mediumpurple'}/>
        </mesh>
        <mesh position-y={-1} rotation-x={-3.14 * 0.5} scale={10}>
          <planeGeometry/>
          <meshStandardMaterial color={'greenyellow'}/>
        </mesh>
      </group>
    </>
  )
}