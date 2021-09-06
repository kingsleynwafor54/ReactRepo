import React from "react"
import Status from "./Status"
import  Skills from "./Skills"
// const Status =(props)=>{
//     let status =props.status?"Old enough to drive ":"Too young for driving"
// return <p>{status}</p>
// }


const AppButton=()=>{
    let date=new Date() 
    let currentYear =date.getFullYear
    let birthYear=2002
    const age=currentYear-birthYear
    let status =age>=18
    return (
        <div clasName="AppButton">
             <Skills skills={['HTML', 'CSS', 'JavaScript']} />                 
      <Status status={status}/>

        </div>
    )
}
// export default Status
export default AppButton