import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import {
  Text,
  TransformControls,
  OrbitControls,
  PivotControls,
  Html,
  Float,
  MeshReflectorMaterial
} from '@react-three/drei'
import '../App.css'

export default function Scene () {
  const groupRef = useRef()
  const cubeRef = useRef()
  const sphere = useRef()

  useFrame((state, delta) => {
    cubeRef.current.rotation.y += 0.001
    // const angle = state.clock.elapsedTime
    // state.camera.position.x = Math.sin(angle) * 4
    // state.camera.position.z = Math.cos(angle) * 4
    // state.camera.lookAt(0,0,0)
  })

  return (
    <>
      <OrbitControls makeDefault/>
      <directionalLight position={[1, 2, 3]}/>
      <ambientLight intensity={.2}/>
      <group ref={groupRef}>
        <PivotControls
          anchor={[0,0,0]}
          lineWidth={4}
          scale={100}
          fixed={true}
          depthTest={false}>
          <mesh position-x={-2} ref={sphere}>
            <Html
              occlude={[sphere, cubeRef]}
              wrapperClass="label"
              center
              distanceFactor={8}
              position={[1,1,1]}>
              That's the Sphere
            </HtmlHtml>
            <sphereGeometry/>
            <meshStandardMaterial color={'orange'}/>
          </mesh>
        </PivotControls>
        <mesh ref={cubeRef} rotation-y={3.14 * 0.25} position-x={2} scale={1.5}>
          <boxGeometry scale={1.5}/>
          <meshStandardMaterial color={'mediumpurple'}/>
        </mesh>
        <TransformControls object={cubeRef}/>

      </group>
      <mesh position-y={-1} rotation-x={-3.14 * 0.5} scale={10}>
        <planeGeometry/>
        {/*<meshStandardMaterial color={'greenyellow'}/>*/}
        <MeshReflectorMaterial  mirror={.1}/>
      </mesh>

      <Float
        speed={5}
        floatIntensity={2}
      >
        <Text
          position={[1,2,1]}
          color="salmon"
          fontSize={1}
        >I Love R3F
        </Text>
      </Float>


    </>
  )
}
