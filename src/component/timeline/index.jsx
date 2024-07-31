import React, { memo, useState } from "react"
import DialogBox from "../dialog"

import "./style.scss"


const TimeLine = ({ date }) => {
    const [open, setOpen] = useState(false)
    const timeArray = Array.from({ length: 24 }, (v, i) => ({ "24h": i + 1, "12h": (i + 1 > 12) ? ((i + 1) % 12 === 0 ? 12 : (i + 1) % 12) + " PM" : ((i + 1) + " AM") }))
    const handleOnOpenDialog = () => {
        setOpen(true)
    }
    return (
        <>
            <div className="time-container">
                <div className="timeline">
                    {timeArray.map((time, index) => <div className="time" key={index}><span>{time["12h"]}</span><div onClick={() => handleOnOpenDialog()}></div></div>)}
                </div>
            </div>
            {open && <DialogBox open={open} title={"Dialog Box"} onClose={()=>setOpen()}/>}
        </>
    )
}
export default memo(TimeLine);

