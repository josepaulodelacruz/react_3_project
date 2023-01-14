import { useState, useRef } from 'react'
import './App.css'
import Scene from './components/Scene'
import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'

function App() {

  return (
    <div className="App">
      <Canvas
        dpr={1}
        gl={{
          antialias:true,
          toneMapping: THREE.ACESFilmicToneMapping,
          outputEncoding: THREE.sRGBEncoding
        }}
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [3,2,6]
        }}
      >
        <Scene />
      </Canvas>
    </div>
  )
}

export default App
