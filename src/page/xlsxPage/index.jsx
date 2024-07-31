import React, { useEffect, useRef, useState } from "react";

const XlsxPage = () => {
    const [open, setOpen] = useState(true)
    const [excelData, setExcelData] = useState([])
    const obj = {
        firstName: "Karthik",
        lastName: "Balaji",
        id: 10
    }


    const handleFileRead = async () => {
        const response = await fetch("./sample.csv");
        const data = await response.text();
        console.log("data", data.split("\r\n"));
        console.log('data.trim()', data.split("\r\n").map((item) => item?.split(",")))
        setExcelData(csvToArr(data, ","))
    };
    function csvToArr(stringVal, splitter) {
        const [keys, ...rest] = stringVal
            .trim()
            .split("\r\n")
            .map((item) => item.split(splitter));

        const formedArr = rest.map((item) => {
            const object = {};
            keys.forEach((key, index) => (object[key] = item.at(index)));
            return object;
        });
        return formedArr;
    }

    const JSONToCSVConvertor = (data) => {
        let csvText = ""
        const tempHeading = []
        data?.forEach((headings) => tempHeading?.push(...Object?.keys(headings)))
        const headings = [...new Set(tempHeading)]
        csvText += [...new Set(headings)]?.toString()
        let newLine = []
        newLine.length = headings.length
        csvText += `\n` + newLine.toString() // Creating a gap between heading and the data.
        data?.forEach((keyValues) => {
            csvText += `\n`
            headings?.forEach((keys, index) => {
                csvText += (index != 0 ? "," : "") + (typeof keyValues[keys] === "object" ? JSON?.stringify(keyValues[keys]) : keyValues[keys] ?? "")
            })
        })
        console.log("csvText", csvText);
    };
    const addObj = () => {
        const arr = excelData;
        arr.push(obj)
        JSONToCSVConvertor(arr)
        console.log("arr", arr);
        setExcelData(arr)

    }
    useEffect(() => {
        handleFileRead()
    }, [])

    return (
        <>
            XLPAGE
            {excelData?.map((val, index) => <p key={index}>{val?.id}</p>)}
            <button onClick={() => addObj()}>Add</button>
        </>
    )
}

export default XlsxPage;