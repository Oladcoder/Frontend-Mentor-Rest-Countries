import React, {useState, useEffect} from 'react'
import {FaSearch} from 'react-icons/fa'
import CountriesList from './CountriesList'

const regions = ["Africa",  "Americas",  "Oceania",  "Asia",  "Europe"]

const Home = ({setter, dark}) => {

    const [countryData, setCountryData] = useState([])
    const [list, setList] = useState([])
    const [select, setSelect] = useState("All")
    const [searchText, setSearchText] = useState('')

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then (response => response.json())
        .then (data => setCountryData(data))
         
    }, [])



    const handleChange = (e) => {
        setSelect(e.target.value)
    }
    
    

    const filteredCountries = () => {
        const filterer = countryData.filter(item => {
             if(searchText.length < 1 && select === "All"){
                return  regions.includes(item.region) 
            }
            else if(searchText.length > 2 ){
                return regions.includes(item.region) && 
                item.name.official.includes(searchText) 
             }
                return item.region === select
            })
        setList(filterer)
    }
    
    
    useEffect(()=> {
        filteredCountries()
    }, [select, searchText])
    
   
  return (
    <div className="">
        <div className="flex mt-8 justify-between px-14 items-center">
            <div className={` ${dark ? 'Navdark' : 'Navlight'} flex shadow-lg items-center h-10 w-1/3`}>
                <FaSearch/>  
            <input value={searchText} onChange={(e) => setSearchText(e.target.value)} className="bg-transparent w-full  text-xs text-white focus:border-none hover:border-none active:border-none" placeholder='Search for a country...'/> 
            </div>

            <select value = {select} onChange={handleChange} className={`w-32 active:border-none ${dark ? 'Navdark' : 'Navlink'} focus:border-none shadow-lg h-10 text-xs`} placeholder='chhose o'>
                <option value ="Africa">Africa</option>
                <option value ="Americas">America</option>
                <option value ="Asia">Asia</option>
                <option value ="Europe">Europe</option>
                <option value ="Oceania">Oceanic</option>
                <option value ="All" defaultValue= {true} >Filter by Region</option>
            </select>
           
        </div>
        <CountriesList 
        data = {list}
        setter = {setter}
        dark = {dark}
        />
    </div>
  )
}

export default Home