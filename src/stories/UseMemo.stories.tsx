import React, {useMemo, useState} from "react";

export default {
    title: 'useMemo'
}

export const CountingExample = () => {

    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => {
        let tempResultA = 1;
        for (let i = 1; i <= a; i++) {
            tempResultA *= i;
        }
        return tempResultA
    }, [a]);


    for (let i = 1; i <= b; i++) {
        resultB *= i;
    }

    return <>
        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e) => setB(Number(e.currentTarget.value))}/>
        <hr/>
        <div>
           Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>
    </>
}



type UserType = {
    users: Array<string>
}

const SecretUsers = (props: UserType) => {
    return (
        <div>
            {props.users.map((u, i) => <div key={i}>{u}</div>)}
        </div>
    )
}

const Users = React.memo(SecretUsers);

export const HelpsToReactMemo = () => {

    const [counter, setCounter] = useState(0)

    const [users, setUsers] = useState(["Dimych", "Valera", "Artem"])

    const newArray = useMemo(() => {
        const newArray = users.filter(u => u.toLowerCase().indexOf("a") > -1)
        return newArray
    }, [users])

    const addUser = () => {
        const newUsers = [...users, 'Svetlana' + new Date().getTime()];
        setUsers(newUsers);
    }

    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={() => addUser()}>add user</button>
            {counter}
            <Users users={newArray}/>
        </>
    )
}