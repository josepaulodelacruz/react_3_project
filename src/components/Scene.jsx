import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { TransformControls, OrbitControls, PivotControls } from '@react-three/drei'

export default function Scene () {
  const groupRef = useRef()
  const cubeRef = useRef()
  const sphere = useRef()

  useFrame((state, delta) => {
    cubeRef.current.rotation.y += delta
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
        <PivotControls anchor={[0,0,0]} depthTest={false}>
          <mesh position-x={-2}>
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
        <meshStandardMaterial color={'greenyellow'}/>
      </mesh>

    </>
  )
}