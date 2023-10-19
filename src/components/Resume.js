import { Component } from "react";
class Resume extends Component {
    render() {
        const { name } = this.props;
        return (
            <div>
                <h1>This is a class component {name}</h1>
            </div>
        );
    }
}
export default Resume;
