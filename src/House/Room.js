import React from 'react'
import Pillar from "./Pillar"
import Wall from "./Wall"
import Window from "./Window"
import Door from "./Door"
import  { useState } from 'react'
// import React, { useState } from 'react'; 
// import Button from "./Button"

const Room=()=>{
  const [notPlastered,isPlastered]=useState(false)
  const [isNotPaninted,isPainted]=useState("brown")
  const[lightOff,lightOn]=useState(false)
const nowPlastered=()=>{
  isPlastered(true)

}
const controlLight=()=>{
  lightOn(true)
}

const updateColor=(color)=>notPlastered ? isPainted(color):"brown"
const controlSwitch=(color)=>lightOff  ? isPainted(color) :""
    return (
        <div className="room" style={{backgroundColor:isNotPaninted}} >      
    <h2 >Room</h2>
      <input type ="checkbox"  onChange={()=>controlSwitch("green")}  />
    
  
    <ul>
      
    <li><Pillar /> </li>
   
    <li> <Wall className="RoomWall" backgroundColor="red" >
       </Wall></li>

      <li> <Pillar className="pillar" /></li>
    <li> <div className="window2">
      <Window />
      <p>-------------------------------------------</p>
      <Door/>  
      </div> </li>

       </ul>
       <button onClick={nowPlastered} >Plaster</button>    
            <button onClick={()=>updateColor("yellow")} >Paint</button>   
        </div>
        
    );
}

export default Room