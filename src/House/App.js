import React from "react"
import "./App.css"
import Decking from "./Decking"
import Roof from "./Roof"
import Room from "./Room"
import Foundation from "./Foundation"
import Land from "./Land"

const App=()=>{
    return(
        <div>
        <Roof/>
        <Room/>
        <Decking/>
        <Room/>
        <Foundation/>
        <Land/>
    
        </div>
    )
}

export default App