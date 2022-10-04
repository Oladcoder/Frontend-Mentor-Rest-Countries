import React from 'react'
import {BsMoonFill} from 'react-icons/bs'

const Navbar = ({dark, toggle}) => {
  return (
    <div className={` ${dark ? 'Navdark' : 'Navlight'}  flex justify-between h-16 items-center px-12 shadow-md`}>
        <h1>Where in the world?</h1>
        <div onClick={toggle} className={`flex items-center ${dark ? 'text-white' : 'text-black'} gap-2`}>
            <BsMoonFill/>
            Dark Mode
        </div>
    </div>
  )
}

export default Navbar