import { useState } from "react";

function StatesComp(){
    let count=0
    const [cnt,setCnt]=useState(0);

    const countOp=(op)=>{
        if(op==='INCR'){
            count=count+1 //working with normal
            setCnt(cnt+1)//Working with state
        }

        if(op==='DECR'){
            count=count-1
            setCnt(cnt-1)
        }
    }
    return(
        <div>
            <h3>Increment/Decrement Count</h3>
            <p>Count ={cnt}</p>
            <button onClick={()=>(countOp('INCR'))}>Add Count</button>
            <button onClick={()=>(countOp('DECR'))}>Del Count</button>
        </div>
    )

}

export default StatesComp

// contract : if you want react to re render a variable due to the user operation(incr/decr)
// then make this variable as state  in component, their value changes