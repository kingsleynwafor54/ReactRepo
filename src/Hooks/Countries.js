import React from "react"


const Country=({country:{name,city}})=>{
   return (
       <div>
       <h1>{name}</h1>
       <small>{city}</small>
       </div>
   ) 
}


const Countries=({countries})=>{
const countryList=countries.map((country)=>(<Country key={country.name} country={country}/>))
return <div>{countryList}</div>
}
export default Countries