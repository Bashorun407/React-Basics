export const Soldier = (props) => {
    function clickHandler() {
        alert("This link has been clicked!!")
    }
    return (
        <div>
            <h1 color="title"> This is a soldier</h1>
            <p>Country: {props.soldier_info.country}</p>
            <p>Ammunition: {props.soldier_info.amunition}</p>
            <p>Speciality: {props.soldier_info.speciality}</p>

            <button className="title" onClick={clickHandler}>Learn more</button>
        </div>
    )
}

export default Soldier