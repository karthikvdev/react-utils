import { useContext, useEffect, useId, useMemo, useReducer, useRef, useState } from "react"
import Child from "./child"
import { AppContext } from "../../App";
import axios from "axios";
import { getReq } from "../../service/axios";
import "./styles.scss"
import { useSearchParams } from "react-router-dom";

export const TestPage = () => {
    const id = useId()
    const inputRef = useRef()
    const[inputValue,setInputValue] = useState("")
    let [searchParams, setSearchParams] = useSearchParams();
    const { open, setOpen } = useContext(AppContext)
    console.log("open", open);
    const nameRef = useRef(null);
    const ageRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false)
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const reducerFun = (state, action) => {
        return [...state, action]
    }

    const initialValue = []
    const [state, dispatch] = useReducer(reducerFun, initialValue)
    console.log("State", state);
    const [axiosRes, setAxiosRes] = useState(1);
    const [axiosClick, setAxiosClick] = useState(false);
    const [count, setCount] = useState(0)

    useEffect(() => {
        const cancelToken = axios.CancelToken;
        const source = cancelToken.source();
        setAxiosRes("axios request created");
        getReq(source).then((res) => {
            setAxiosRes(res)
        })
        console.log("useEffect-1", axiosClick)
        return () => {
            console.log("useEffect-2", axiosClick)
            source.cancel()
        };

    }, [axiosClick])

    useEffect(() => {
        console.log("re-renders")
        // setSearchParams({ hello: "world" });
        console.log("searchParams",Object.fromEntries([...searchParams]));
    }, [])
    console.log("Fsdfsdfsdf");
    const fun = () => {
        console.log("Fsdfsdf");
    }
    const memoFunction = useMemo(() => {
        console.log("memo")
        return count;
    }, [count === 10])
    // const memoFunction =count
    console.log("Fsdfsdfsdf");
    // useEffect(() => {
    //     if (count == 10) {
    //         setIsVisible(!isVisible)
    //     }
    // }, [count])


    return (
        <AppContext.Consumer>
            {(conetxtItems) => <div className="page">
                <span id="sample" className="test">Test</span>
                <input ref={inputRef} onChange={(e)=>setInputValue(e.target.value)}/>
                <p>conetxtItems:{String(conetxtItems.open)}</p>
                <button onClick={() => conetxtItems.setOpen(!conetxtItems.open)}>Context Button</button>
                <p>{count}</p>
                <button onClick={() => setCount((count) => count + 1)}>+</button>
                <button onClick={() => setCount((count) => count - 1)}>-</button>
                {/* <button type="button" onClick={() => setAxiosClick(!axiosClick)}>Axios call</button> */}
                <input ref={nameRef}
                // onChange={(e) => setName(e.target.value)} 
                // onChange={(e) => reducer({ type: "name", name: e.target.value })} 
                />
                <input ref={ageRef}
                // onChange={(e) => setAge(e.target.value)} 
                // onChange={(e) => reducer({ type: "age", age: e.target.value })} 
                />
                <button onClick={(e) => dispatch({ name: nameRef.current.value, age: ageRef.current.value })}>Reducer</button>
                {/* <button onClick={() => setCount((count) => count + 1)}>Add</button>
            <button onClick={() => setIsVisible(!isVisible)}>open/close</button> */}
                <ul>
                    {state.map((val, inde) => <div style={{ display: "flex" }} key={inde}><li style={{ width: "100%" }}>{val.name}</li> <li style={{ width: "100%" }}>{val.age}</li></div>)}
                </ul>
                {conetxtItems.open && <Child counts={memoFunction} />}
            </div>}
        </AppContext.Consumer>
    )
}