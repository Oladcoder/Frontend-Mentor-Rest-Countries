import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import ExtendedCountry from './components/ExtendedCountry'
import { Route, Routes } from 'react-router-dom'


function App() {
const [currentCountry, setcurrentCountry] = useState({})
const [darktheme, setTheme] = useState(false)

const countrySetter = (data) => {
  setcurrentCountry(data)
}
const darkModeToggle = () => {
  setTheme(prev => !prev)
}

  return ( 
    <div className={` ${darktheme ? 'dark' : 'light' } h-fit min-h-screen`}>
      <Navbar dark = {darktheme} toggle = {darkModeToggle}/>
      <Routes>
        <Route path = '/' element= {<Home setter = {countrySetter} dark = {darktheme}/>}/>
        <Route path = '/country' element = {<ExtendedCountry country= {currentCountry} dark = {darktheme}/>}/>
      </Routes>
    </div>
  )
}

export default App
