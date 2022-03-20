import React, {useState} from "react";

export default {
    title: "React.memo demo"
}

type NewMessagesCounterType = {
    count: number
}

const NewMessagesCounter = (props: NewMessagesCounterType) => {
    return <div>{props.count}</div>
}

type UsersType = {
    users: Array<string>
}

const SecretUsers = (props: UsersType) => {
    return (
        <div>
            {props.users.map((u, i) => <div key={i}>{u}</div>)}
        </div>
    )
}

const Users = React.memo(SecretUsers);

export const Example1 = () => {
    const [counter, setCounter] = useState(0)

    const [users, setUsers] = useState(["Dima", "Valera", "Artem"])

    const addUser = () => {
        const newUsers = [...users, 'Anton' + new Date().getTime()];
        setUsers(newUsers);
    }

    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={addUser}>add User</button>
            <NewMessagesCounter count={counter}/>
            <Users users={users}/>
        </>
    )
}