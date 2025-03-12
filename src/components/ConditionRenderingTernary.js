import { useState } from "react"

const TernaryConditionRendering = () => {
    const [isLogged, setIsLogged] = useState(true)

    let message;
    if (isLogged) {
        message = <p>Login Chief</p>
    }
    else {
        message = <p>Welcome Chief!!</p>
    }
    function handleClick() {
        setIsLogged(false)
    }

    return (
        <div>
            {/* for some reason, the Ternary operator did not work */}
            {
                isLogged && <p>Welcome Chief!</p>
            }
            {/* <p>{message}</p> */}
            <br />
            <button className="title" onClick={handleClick}>Login</button>
        </div>
    )
}

export default TernaryConditionRendering