export default function Hello(props) {
    return <h1>Hello {props.name}</h1>
}

export function Goodie(props) {
    return <h1>The godfather that has no godfather is: {props.name}</h1>
}

export const CallMe = (props) => <h1>{props.name} composed Hallelujah song</h1>