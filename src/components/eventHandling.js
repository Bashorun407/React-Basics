import { useState } from "react"

const EventHandling = () => {
    const [count, setCount] = useState(0)

    function handleClick() {
        setCount(count + 1)
    }

    function resetCount() {
        setCount(0)
    }

    return (
        <div>
            <h1>Event Handling</h1>
            <p>{count}</p>
            <button className="title" onClick={handleClick}>Increment</button>
            <button onClick={resetCount}>Reset</button>
        </div>
    )
}

export default EventHandling