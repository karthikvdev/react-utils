import React, { useEffect, useState } from "react";
import Calender from "../../component/calender";
import TimeLine from "../../component/timeline";
import "./style.scss"

const CalenderPage = () => {
    const [date, setDate] = useState(new Date())
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
console.log({date});
    useEffect(() => {
        document.title = "Calender"
    }, [])


    return (
        <>
            <div className="calender-container">
                <div>
                    <TimeLine date={date} />
                </div>
                <div className="calender-wrapper">
                    <Calender onChange={(date) => setDate(date)} />
                    <h2 style={{ textAlign: "center" }}>{date.getDate()}, {monthNames[date.getMonth()]} {date.getFullYear()}</h2>
                </div>

            </div>
        </>
    )
}

export default CalenderPage;