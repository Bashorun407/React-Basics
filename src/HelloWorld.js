const HelloWorld = (props) => {

    const myElement = <h1>Hello world, {props.name} and friends</h1>
    return myElement
}

export const HelloTitle = (props) => {

    function handleClick() {
        alert("Button clicked!!");
    }
    return (
        <div>
            <h1 className="title">This is a title by {props.name}</h1>
            <h2>This is the sub-title</h2>
            <p>This is a paragraph</p>
            <button onClick={handleClick}>Click here</button>
        </div>
    )
}

export default HelloWorld