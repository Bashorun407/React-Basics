import React from "react";

class Employee extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            firstName: "Olusheyi",
            lastName: "Bashorun",
            email: "olubash@gmail.com"
        }
    }

    updateEmployee() {
        this.setState({
            firstName: "Ade",
            lastName: "Odeyemi",
            email: "adeodanz@gmail.com"
        })
    }
    render() {
        return (
            <div className="center">
                <h1>Employee Details</h1>
                <p>{this.state.firstName}</p>
                <p>{this.state.lastName}</p>
                <p>{this.state.email}</p>
                <button onClick={() => this.updateEmployee()}>Update Employee</button>
            </div>
        )
    }
}

export default Employee