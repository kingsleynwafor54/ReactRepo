import React,{useState} from 'react' 



const Button=()=>{
const [state, setstate] = useState(4)
const decrement=()=>{
    setstate(formal=>formal-1)
}


const increment=()=>{
    setstate(formal=>formal+1)
}
    return (
        <div>

        <button onClick={decrement}>-</button>
        <span>{state}</span>
        <button onClick={increment}>+</button>
        </div>
    )
}

export default Button