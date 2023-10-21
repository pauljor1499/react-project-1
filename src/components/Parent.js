import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
    const [parentcount, setParentCount] = useState(0);
    const [childcount, setChildCount] = useState(0);

    const changeParentCount = () => {
        setParentCount(parentcount + 1);
    };

    const changeChildCount = () => {
        setChildCount(childcount + 1);
    };

    return (
        <>
            <div>This is a parent component</div>
            <h1>Parent count is: {parentcount}</h1>
            <Child childcount={childcount} />
            <button onClick={changeParentCount}>Increment Parent Count</button>
            <button onClick={changeChildCount}>Increment Child Count</button>
        </>
    );
};

export default Parent;
