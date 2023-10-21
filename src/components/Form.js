import React, { Component } from "react";

class Form extends Component {
    state = {
        firstname: "",
        lastname: "",
    };

    handleChange = (event) => {
        this.setState({
            firstname: event.target.value,
        });
        console.log(this.state.firstname);
    };

    handleLastNameChange = (event) => {
        this.setState({
            lastname: event.target.value,
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log({
            fname: this.state.firstname,
            lname: this.state.lastname,
        });
    };

    render() {
        return (
            <div>
                <div>Form</div>
                <div>{this.state.firstname}</div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.firstname} onChange={this.handleChange} />
                    <input type="text" value={this.state.lastname} onChange={this.handleLastNameChange} />
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default Form;
