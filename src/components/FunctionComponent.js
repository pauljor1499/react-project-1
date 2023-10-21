import React from "react";

const FunctionComponent = () => {
    const handleClick = () => {
        console.log("Hello");
    };

    return (
        <div>
            <div>
                <h1>Function-based Component</h1>
                <button onClick={handleClick}>Click</button>
            </div>
        </div>
    );
};

export default FunctionComponent;
