import React from 'react'
import Window from "./Window"

import Button from "./Button"

const Wall=( props)=>{

    return (
        <div className="Wall"  >
          
       
    
          <ul>
            <li><Window header="myWindow"background='red'/></li>
            <li><Window background='red'/></li>
            </ul>
           
        </div>
    )
}
export default Wall