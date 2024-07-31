import React, { useEffect, useRef, useState } from "react";
import { useIntersection } from "../../hooks/useInterSectionObserver";

const InterSectionObservers = () => {

    const [element, setElement] = useState([])
    const [listArr, setListArr] = useState([])
    const [id, setId] = useState(1)
    const ref = useRef()
    const ref1 = useRef()
    const [isView] = useIntersection(ref)
    const [isView1] = useIntersection(ref1)
console.log("ref",ref);
      


    const interSectionObserver = new IntersectionObserver((entries) => {
        console.log(entries)
    })

    const handleOnUpdate = () => {
        setElement(document.querySelectorAll(".intid"))
    }

    useEffect(() => {
        setListArr(Array.from({ length: 100 }, (v, i) => i + 1))
    }, [])

    useEffect(() => {
        handleOnUpdate()
    }, [listArr])

    useEffect(() => {
        if (element.length) {
            interSectionObserver?.observe(element[0])
            interSectionObserver?.disconnect()
            console.log("element", interSectionObserver?.observe(element[0]));
        }
    }, [])



    return (
        <div>
            <div className="intid" ref={ref} style={{ height: "100vh" }}>InterSectionObserver -1 </div>
            <div className="intid" ref={ref1} style={{ height: "100vh" }}>InterSectionObserver - 2</div>
            <button onClick={() => setId((id) => id + 1)}>{id}</button>
            <ul>
                {listArr.map((val, index) => <li key={index} className={`list ${val}`}>{val}</li>)}
            </ul>
        </div>
    )
}

export default InterSectionObservers;