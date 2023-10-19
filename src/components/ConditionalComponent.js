import React from "react";
import { useState } from "react";

const ConditionalComponent = () => {
    const [display, setDisplay] = useState(true);

    if (display) {
        return (
            <div>
                <h3>This is conditional component</h3>
            </div>
        );
    } else {
        return (
            <div>
                <h3>Nothing to see here</h3>
            </div>
        );
    }
};

export default ConditionalComponent;
