import { useEffect, useState } from "react"


function Efffects(){
    const[x,setX]=useState(10);

    useEffect(()=>{
        console.log('use effect called '+x)
        setX(11)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]); // use effect does not depend on any state so run  only once

    const add=()=>{
        setX(x+2)
    }

    return(
        <>
        {
            console.log('return called '+x)}
            <p>{x}</p>
            <button onClick={add}>Add 2 to x</button>
        </>
    )
}

export default Efffects