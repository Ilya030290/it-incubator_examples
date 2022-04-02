import React, {useCallback, useMemo, useState} from "react";

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

export const likeUseCallback = () => {

    console.log('Like UseCallback');

    const [counter, setCounter] = useState(0)

    const [books, setBooks] = useState(["React", "JS", "CSS", "HTML"])

    const addBook = () => {
        setBooks([...books, 'Angular' + new Date().getTime()]);
    }


    //при использовании useMemo первым параметром идет коллбэк,возвращать наш коллбэк будет что-либо,
    // в данном случае ещё одну функцию которую нам нужно, а вторым массив зависимостей,
    // за которым будет следить наш хук, если изменится значение нашей зависимости, то по новой
    //вызовется наша функция, если не поменяется, то и не вызовется
    const memoizedAddBook = useMemo(() => {
        return  () => {
            setBooks([...books, 'Angular' + new Date().getTime()]);
        }
    }, [books]);


    //при использовании useCallback  у нас сразу первым параметром идет
    // коллбэк - функция, которую нужно вызывать при изменении
    // значения нашей зависимости
    const memoizedAddBook2 = useCallback(() => {
        setBooks([...books, 'Angular' + new Date().getTime()]);
    }, [books]);

    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            {counter}
            <Books books={books} addBook={memoizedAddBook2}/>
        </>
    )
}

type BooksSecretType = {
    books: Array<string>,
    addBook: () => void
}

const BooksSecret = (props: BooksSecretType) => {
    console.log('BooksSecret')
    return (
        <div>
            <button onClick={() => props.addBook()}>add book</button>
            {props.books.map((book, i) => <div key={i}>{book}</div>)}
        </div>
    )
}

const Books = React.memo(BooksSecret);