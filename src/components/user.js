import { useState } from "react"


const User = () => {
    const [firstName, setFirstName] = useState('Olushile')
    const [lastName, setLastName] = useState('Ajaguna')
    const [email, setEmail] = useState('olush@gmail.com')

    return (
        <div>
            <h1>User Details</h1>
            <p>{firstName}</p>
            <p>{lastName}</p>
            <p>{email}</p>
        </div>
    )
}

export default User
