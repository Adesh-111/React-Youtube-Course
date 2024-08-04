import React, {useState} from "react";

function Counter() {

    const [count, setCount] = useState(0);

    const increment = () =>{
        setCount(count + 1);
    }

    const decrement = () =>{
        setCount(count - 1);
    }

    const reset = () =>{
        setCount(0);
    }

    return ( <div className="counter">
    <h1>{count}</h1>
    <button onClick={increment} className="counter-item-1">Increment Count</button>
    <button onClick={reset} className="counter-item-2">Reset</button>
    <button onClick={decrement} className="counter-item-3">Decrement</button>
    </div> );
}

export default Counter;