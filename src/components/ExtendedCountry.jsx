import React from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import Country from './Country'
import { Link } from 'react-router-dom'


const ExtendedCountry = ({country, dark}) => {
const currencygetter = Object.values(country.currencies)
const currency = (currencygetter[0].name)

const languagesgetter = Object.values(country.languages)
const languages = (languagesgetter.map(l => <span>{l}, </span>))

 






  return (
    <div className="flex flex-col justify-center items-center">
      <div className='flex justify-start items-center w-full'>
        <Link to = "/">     <div className={`w-24 h-6  rounded-sm shadow-lg gap-2 justify-center items-center ml-12 mt-12 flex ${dark ? 'Navdark' : 'Navlight'} `}>
        <BsArrowLeft />
        <h5> Back</h5>
      </div>
      </Link>
 
      </div>



<div className='flex sm:flex-col justify-center gap-20 items-center mt-10 w-full px-10'>
        <div>
            <img className="h-80 w-full" src={country.flags.png} alt={`flag of ${country.name.official}`} />
        </div>
        <div className={`${ dark ? 'text-white' : 'text-black'} flex flex-col justify-center sm:items-start items-center gap-10 `}>
          <div className='flex justify-start items-center w-full'>
          <h1 className='text-left text-2xl font-bold'>{country.name.common}</h1>
          </div>
          <div className='flex sm:flex-col sm:justify-center sm:items-start gap-20'>
            <div>
              <h1 className="font-bold">Native name : <span className="font-thin">{country.name.common}</span></h1>
              <h1 className="font-bold text-sm mt-2">Population : <span className="font-thin">{country.population}</span></h1>
              <h1 className="font-bold text-sm mt-2">Region : <span className="font-thin">{country.region}</span> </h1>
              <h1 className="font-bold text-sm mt-2">Sub Region : <span className="font-thin">{country.subregion}</span> </h1>
              <h1 className="font-bold text-sm mt-2">Capital : <span className="font-thin">{country.capital}</span> </h1>
            </div>

            <div>
            <h1 className="font-bold text-sm mt-2"> Top Level Domain : <span className="font-thin">{country.tld}</span></h1>
              <h1 className="font-bold text-sm mt-2">Currencies : <span className="font-thin">{currency}</span></h1>
              <h1 className='flex font-bold text-sm mt-2'>Languages : <span className="font-thin">{languages}</span></h1>
            </div>

            
          </div>
          <div className='flex-row justify-center items-center gap-10 h-10 '>
          Border Countries:  {country.borders && country.borders.map(item => <button className={` ${dark ? "Navdark" : 'Navlight'} h-8 shadow-md mr-6`}>{item}</button>)}
          </div>
          

          
        </div>
        
        </div>

    </div>
  )
}

export default ExtendedCountry