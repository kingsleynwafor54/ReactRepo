import React from 'react'

function Soap({numbers}) {
   const list=numbers.map((mark)=><li>{mark}</li>)
    return list
}

export default Soap
