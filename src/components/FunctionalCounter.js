import React from "react";
import { useState } from "react";

const FunctionalCounter = () => {
    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter + 1);
    };

    return (
        <div>
            <h3>Functional Counter</h3>
            <div>Counter value: {counter}</div>
            <div>
                <button onClick={increment}>Increment</button>
            </div>
        </div>
    );
};

export default FunctionalCounter;
