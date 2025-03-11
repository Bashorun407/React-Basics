import { useState } from "react"

const ConditionRendering = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    let message;

    if (isLoggedIn) {
        message = <p>Welcome user!</p>
    }
    else {
        message = <p>Please login</p>
    }

    function handleLogin() {
        setIsLoggedIn(true)
    }
    return (
        <div>
            <p>{message}</p>

            <br />
            <button className="title" onClick={handleLogin}>Login</button>
        </div>
    )
}

export default ConditionRendering