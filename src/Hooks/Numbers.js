import React from 'react'

function Numbers({numbers}) {
    const list =numbers.map((number)=> <li key={number}>{number}</li>)
    return (
list
    )
     
}

export default Numbers
