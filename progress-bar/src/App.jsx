import { useEffect, useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProgressBar from './components/ProgressBar'

function App() {
  return (
    <>
      <div className='app'>
        <span>Progress bar</span>
        <ProgressBar ></ProgressBar>
        <ProgressBar ></ProgressBar>
      </div>
    </>
  )
}

export default App
