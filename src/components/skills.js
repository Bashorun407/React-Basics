export function Skills(props) {

    function clickHandle() {
        alert("This link was clicked!!")
    }
    return (
        <div>
            <h1>This is a list of Skills</h1>
            <p>Skills needed by students are: {props.skill_up}</p>
            <button onClick={clickHandle} className="title">Click Here</button>
        </div>
    )
}

export default Skills