import { useState } from "react"


const User = () => {
    //Using useState function with empty-string as argument
    // const [firstName, setFirstName] = useState('Olushile')
    // const [lastName, setLastName] = useState('Ajaguna')
    // const [email, setEmail] = useState('olush@gmail.com')

    //Using useState function with object as argument
    const [user, setUser] = useState({
        firstName: 'Bolaji',
        lastName: 'Ayobami',
        email: 'bolayomi@gmail.com'
    })

    function UpdateUser() {
        //These functions use useState function with string argument
        // setFirstName('Oluseye')
        // setLastName('Babade')
        // setEmail('babadana@gmail.com')

        //This useState function uses object argument
        setUser({
            firstName: 'Aboyeji',
            lastName: 'Salami',
            email: 'boyesalms@gmail.com'
        })
    }
    return (
        <div>
            <h1>User Details</h1>
            <p>{user.firstName}</p>
            <p>{user.lastName}</p>
            <p>{user.email}</p>
            <button onClick={UpdateUser}>Update User</button>
        </div>
    )
}

export default User
