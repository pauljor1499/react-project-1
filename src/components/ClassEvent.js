import React, { Component } from "react";
class ClassEvent extends Component {
    handleClick() {
        console.log("Class-based event handling");
    }

    render() {
        return (
            <div>
                <h1>This is a class-based component</h1>
                <button onClick={this.handleClick}>Click</button>
            </div>
        );
    }
}
export default ClassEvent;
