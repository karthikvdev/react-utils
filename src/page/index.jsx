import React, { useEffect, useState } from 'react'

const HomePage = () => {
    const [arr, setArr] = useState([1]);
    const [str, setStr] = useState("")

    useEffect(() => {
        console.log('re-renderes')
    }, [arr])

    useEffect(() => {
        console.log('string-re-renderes')
    }, [str])

    return (
        <div>HomePage
            <button onClick={() => setArr("1")}>Click Arr</button>
            <button onClick={() => setStr("1")}>Click Str</button>

        </div>

    )
}

export default HomePage