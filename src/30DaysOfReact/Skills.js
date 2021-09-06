import React from 'react' 
import ReactDom from 'react'


const Skills=(props)=>{
    const skillList=props.skills.map((skill)=><li>{skill}</li>)
    return<ul>{skillList}</ul>
}

export default Skills