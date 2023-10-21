import React from "react";

const Child = ({ childcount }) => {
    console.log("Child component is being rerendered");
    return <div>Child count is: {childcount}</div>;
};

export default React.memo(Child);
