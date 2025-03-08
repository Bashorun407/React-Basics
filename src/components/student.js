export const Student = (props) => {

    function handleClick() {
        alert("This button was clicked!!");
    }
    return (
        <div>
            <h1>Student details</h1>
            <p>Student first name: {props.student_detail.firstName}</p>
            <p>Student last name: {props.student_detail.lastName}</p>
            <p>Student email: {props.student_detail.email}</p>
            <button className="title" onClick={handleClick}>Click Here</button>
        </div>
    )
}

export default Student