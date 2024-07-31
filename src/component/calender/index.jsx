import React, { memo, useCallback, useEffect, useState } from "react"
import "./style.scss"

const Calender = ({ onChange }) => {
    const weekdaysShort = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const [month, setMonth] = useState(new Date().getMonth() + 1)
    console.log("month", month);
    const [year, setYear] = useState(new Date().getFullYear())
    let firstDay = Number((new Date(`${year}-${month}-01`)).getDay())
    console.log("firstDay", firstDay);
    let daysInMonth = new Date(year, month, 0).getDate();
    const [selectedDay, setSelectedDay] = useState()
    const dateFillArr = Array.from({ length: daysInMonth + firstDay }, (ele, i) => i + 1) 
    
    let dateFrame = []
    dateFillArr.forEach((val, index) => {
        if ((index + 1) <= firstDay) {
            dateFrame.push("")
        }
        else {
            dateFrame.push({ label: index + 1 - firstDay, iso: new Date(`${year}-${month}-${index + 1 - firstDay}`).toISOString(), date: new Date(`${year}-${month}-${index + 1 - firstDay}`) })
        }
    })
    const dateArray = Array.from({ length: Math.ceil(dateFrame.length / 7) }, (v, i) => dateFrame.slice(i * 7, i * 7 + 7));

    const handleOnDateHighlight = useCallback((day) => {
        if (day?.date) {
            let className = "date"
            if (new Date(day.date).toISOString().split("T")[0] === new Date().toISOString().split("T")[0]) {
                className += " today"
                console.log("new D",new Date(day.date).toISOString().split("T")[0],new Date().toISOString().split("T")[0]);
            }
            if (new Date(day?.date).toISOString().split("T")[0] === new Date(selectedDay?.date ?? new Date()).toISOString().split("T")[0]) {
                className += " selected"
            }
            return className;
        }
    }, [selectedDay]);

    const handleOnNavigationPrevious = () => {
        if (month === 1) {
            setYear(() => year - 1)
            setMonth(12)
        }
        else {
            setMonth((month) => month - 1)
        }
    }

    const handleOnNavigationAfter = () => {
        if (month === 12) {
            setYear(() => year + 1)
            setMonth(1)
        }
        else {
            setMonth((month) => month + 1)
        }
    }

    useEffect(() => {
        onChange(new Date())
    }, [])

    return (
        <div className="calender">
            <h2 className="title">Calender</h2>
            <div className="calender-month">
                <button onClick={() => handleOnNavigationPrevious()} >&#8678;</button>
                <h3>{monthNames[(new Date(`${year}-${month}-01`)).getMonth()]} {year}</h3>
                <button onClick={() => handleOnNavigationAfter()}>&#8680;</button>
            </div>
            <table className="calender-table row-days">
                <thead className="days-container">
                    <tr>
                        {weekdaysShort.map(day => <th key={day}>{day}</th>)}
                    </tr>
                </thead>
                <tbody className="date-container">
                    {dateArray.map((week, dateIndex) =>
                        <tr key={dateIndex}>
                            {week.map((day, weekIndex) => <td key={weekIndex} className={handleOnDateHighlight(day)} onClick={day?.iso ? () => { onChange(new Date(day?.iso)); setSelectedDay({ ...day, date: new Date(day?.iso) }); } : () => null}>{day?.label}</td>)}
                        </tr>
                    )}
                </tbody>
            </table >
        </div>
    )
}

export default memo(Calender);