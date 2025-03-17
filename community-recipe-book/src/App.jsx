import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Recipe from './pages/Recipe'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
     <Navbar/>
     
     <Routes>
      <Route path='./pages/Home' element={<Home/>}/>
      <Route path='./pages/Recipe' element={<Recipe/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
