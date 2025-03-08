export const Students = (props) => {

    const { firstName, lastName } = props
    return (
        <div>
            <h1>This is an example of Destructuring</h1>
            <p>Here is Students details: {firstName}</p>
            <p>Here is Students details: {lastName}</p>
        </div>
    )
}

export default Students