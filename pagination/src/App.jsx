import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PaginationQ from './CodingExercises/PaginationQ/PaginationQ'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PaginationQ ></PaginationQ>
    </>
  )
}

export default App
