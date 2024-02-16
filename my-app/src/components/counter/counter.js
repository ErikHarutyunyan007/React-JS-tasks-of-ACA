import { useState } from "react";

function Counter (props) {
    let [state,setState] = useState(0)
    return(
        <div className="counterpage">
            <button onClick={() => props.back()} className="back">back</button>
            <div className="countercontainer">
                <button onClick={() => setState(state - 1)}>-</button>
                <div>{state}</div>
                <button  onClick={() => setState(state + 1)}>+</button>
            </div>
        </div>
    )
};

export default Counter;