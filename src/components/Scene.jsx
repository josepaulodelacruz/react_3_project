import { useRef } from 'react'
import { Canvas, useFrame, extend, useThree } from '@react-three/fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import CustomObject from './CustomObject'

extend({ OrbitControls })

export default function Scene () {
  const { camera, gl } = useThree()
  const groupRef = useRef()
  const cubeRef = useRef()

  useFrame((state, delta) => {
    cubeRef.current.rotation.y += delta
    // const angle = state.clock.elapsedTime
    // state.camera.position.x = Math.sin(angle) * 4
    // state.camera.position.z = Math.cos(angle) * 4
    // state.camera.lookAt(0,0,0)
  })

  return (
    <>
      <orbitControls args={[camera, gl.domElement]}/>
      <directionalLight position={[1,2,3]} />
      <ambientLight intensity={.2}/>
      <group ref={groupRef}>
        <mesh position-x={-2}>
          <sphereGeometry/>
          <meshStandardMaterial color={'orange'}/>
        </mesh>
        <mesh ref={cubeRef} rotation-y={3.14 * 0.25} position-x={2} scale={1.5}>
          <boxGeometry scale={1.5}/>
          <meshStandardMaterial color={'mediumpurple'}/>
        </mesh>

      </group>
      <mesh position-y={-1} rotation-x={-3.14 * 0.5} scale={10}>
        <planeGeometry/>
        <meshStandardMaterial color={'greenyellow'}/>
      </mesh>

      <CustomObject />
    </>
  )
}