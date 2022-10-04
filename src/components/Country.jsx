import React from 'react'
import {Link} from 'react-router-dom'

const Country = ({item, setter,dark}) => {
  return (
    <Link to = "/country">
    <div className={` ${dark ? 'Navdark' : 'Navlight'} rounded-md shadow-lg  w-56 h-72 `} onClick={() =>setter(item)}>
        <img alt='country flag' className="w-56 h-32 rounded-md" src ={item.flags.png}/>
        <div className={`text-white ${dark ? 'text-white' : 'text-black'}  px-4 text-left`}>
            <h1 className="text-sm font-bold my-4">{item.name.official}</h1>
            <h3 className="text-xs font-semibold">Population: <span className='font-thin'>{item.population}</span></h3>
            <h3 className="text-xs font-medium">region: <span className='font-thin'>{item.region} </span></h3>
            <h3 className="text-xs font-medium">Capital:<span className='font-thin'> {item.capital}</span></h3>
        </div>
    </div>
    </Link>
  )
}

export default Country
