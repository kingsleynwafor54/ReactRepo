import React from 'react'

function Skills( props) {
    const skillList= props.skill.map((skill)=><li>{skill}</li>)
    return (
        <div>
          <ul>
            {skillList}  
              
              </ul>  
        </div>
    )
}

export default Skills
