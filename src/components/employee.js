import React from "react";

class Employee extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            firstName: "Olusheyi"
        }
    }

    render() {
        return (
            <div className="center">
                <h1>Employee Details</h1>
                <p>{this.state.firstName}</p>
            </div>
        )
    }
}

export default Employee