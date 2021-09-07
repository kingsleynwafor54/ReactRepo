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
  const [isNotPaninted,isPainted]=useState("black")
  const[lightOff,lightOn]=useState(false)
const nowPlastered=()=>{
  isPlastered(!notPlastered)

}
 const changOver=()=>{
  if(lightOff==false){
    lightOn(true)
  }
else if (lightOff==true){
  lightOn(false)
}
 }
 


const updateColor=(color)=>notPlastered ? isPainted(color):""
 const controlSwitch=(color)=>true ? isPainted(color) :""
    return (

        <div className="room" style={{backgroundColor:isNotPaninted}} className="Decking" >   

    Room
      <input type ="checkbox"  onChange={()=>controlSwitch("green") } />
      {/* <button onClick={()=>controlSwitch("green")}>Switch</button>
      <button onClick={changOver}>CH</button>   */}
     
 
  
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
       
            <button onClick={()=>updateColor("brown")} >Paint</button>   
        </div>
        
    );
}

export default Room