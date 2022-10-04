import React, {useState, useEffect} from 'react'
import Country from './Country'

const CountriesList = ({data, setter, dark}) => {
   

    const mappedCountries = data.map(item => {
        return (
            <Country
            key = {item.fifa}
            item ={item}
            setter = {setter}
            dark = {dark}/>
        )
    })


  return (
    <div className="flex justify-center items-center gap-16 my-8 flex-wrap">
        {mappedCountries}

    </div>
  )
}

export default CountriesList