import React from "react"
import Button from "./Button"
import Props from "./Props"
import Stylesheet from "./Stylesheet"
import Skills from "./Skills"
import Header from "./Header"



const App=()=>{
    const data={
        welcome:'welcome to 30days of react',
        title:"Getting Started React",
        subtitle:"JavaScript Library"
    }
    return(
        <div>
       <Button/>
       <Props firstName="kingsley" lastName="Nwafor"/>
       <Stylesheet/>
       <Skills skill={["Html","css","Javascript"]}/>
        <Header data={data}/>
        </div>
    )
}

export default App