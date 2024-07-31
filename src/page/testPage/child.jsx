import React, { memo, useContext, useEffect, useState } from 'react'
import { AppContext } from '../../App'
import { Route, Routes } from 'react-router-dom'
import CalenderPage from '../calenderPage/calender'

const Child = ({counts}) => {
    const [count, setCount] = useState(0)
    const styles = {
        backgroundColor:"blue"
    }
    useEffect(() => {
        console.log("Component mounted !", count)
        //updating / mounting
        return () => {
            console.log("Component Unmounted !", count)
        }
    }, [count])

    useEffect(()=>{
        // mounting
        return (val)=>{
            // unmounting
            console.log("unmounted --->1    1WW     ",val)
        }
    },[])
    const fdsfs = () => {
        setCount(count + 1)
        console.log({ count })
    }
    console.log("Fsdfsdfsdf-child");
    return (
        <>
            <div>Child {count}</div>
            <button onClick={() => fdsfs()}>Child Add</button>
        </>
    )
}

export default memo(Child)