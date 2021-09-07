import React from 'react'


  const Skill =({skill:[tech,level]})=>(
      <li>
          {tech} {level}
      </li>
  )
const DoubleComp=({skills})=> {
    const skillsList=skills.map((skill)=><Skill skill={skill}/>)
    return  ( 

        <ul>{skillsList}</ul>  
    )    
}

export default DoubleComp
