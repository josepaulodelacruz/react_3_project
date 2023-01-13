import { useState, useRef } from 'react'
import './App.css'
import Scene from './components/Scene'
import { Canvas  } from '@react-three/fiber'

function App() {

  return (
    <div className="App">
      <Canvas>
        <Scene />
      </Canvas>
    </div>
  )
}

export default App
