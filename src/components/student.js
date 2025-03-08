export const Student = (props) => {

    function handleClick() {
        alert("This button was clicked!!");
    }
    return (
        <div>
            <h1>Student details</h1>
            <p>Student first name: {props.firstName}</p>
            <p>Student last name: {props.lastName}</p>
            <p>Student email: {props.email}</p>
            <button className="title" onClick={handleClick}>Click Here</button>
        </div>
    )
}

export default Student