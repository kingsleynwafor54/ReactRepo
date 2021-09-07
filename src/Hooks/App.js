import React from "react"
import Button from "./Button"
import Props from "./Props"
import Stylesheet from "./Stylesheet"
import Skills from "./Skills"
import Header from "./Header"
import Numbers from "./Numbers"
import DoubleComp from "./DoubleComp"
import Countries from "./Countries"


const App=()=>{
    const data={
        welcome:'welcome to 30days of react',
        title:"Getting Started React",
        subtitle:"JavaScript Library"
      
    }
    const numbers = [1, 2, 3, 4, 5]
    const skills = [
        ['HTML', 10],
        ['CSS', 7],
        ['JavaScript', 9],
        ['React', 8],
      ]
      const countries = [
        { name: 'Finland', city: 'Helsinki' },
        { name: 'Sweden', city: 'Stockholm' },
        { name: 'Denmark', city: 'Copenhagen' },
        { name: 'Norway', city: 'Oslo' },
        { name: 'Iceland', city: 'Reykjavík' },
      ]
    return(
        <div>
       <Button/>
       <Props firstName="kingsley" lastName="Nwafor"/>
       <Stylesheet/>
       <Skills skill={["Html","css","Javascript"]}/>
        <Header data={data}/>
        <Numbers numbers={numbers}/>
        <DoubleComp skills={skills}/>
        <Countries countries={countries}/>
        </div>
    )
}

export default App