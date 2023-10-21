import React from "react";

const InlineComponent = () => {
    return (
        <div>
            <div style={header}>This is an inline component</div>
        </div>
    );
};

const header = {
    color: "blue",
    fontSize: "40px",
};

export default InlineComponent;
