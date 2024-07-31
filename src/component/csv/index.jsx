import React, { forwardRef, useImperativeHandle, useState } from "react";
import * as XLSX from "xlsx";
import { exportFile } from "../../utils";



export default function Xlsx() {
    const [allsheets, setAllSheets] = useState([])
    const [sheet, setSheet] = useState(allsheets[0])
    

    function closees() {
        console.log("fsdfs");
        window.print();
    }


    const onfileChange = (e) => {
        const [file] = e.target.files;
        const reader = new FileReader();
        reader.onload = (evt) => {
            const wb = XLSX.read(evt.target.result, { type: "binary" });
            const excelFile = Object.keys(wb.Sheets).map((key, index) => {
                return {
                    sheetName: key,
                    title: [...new Set(XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[index]]).map((val) => Object.keys(val)).flat(Infinity))],
                    sheetData: XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[index]])
                }
            })
            setAllSheets(excelFile)
            setSheet(excelFile[0])
        };
        reader.readAsBinaryString(file);
    }

    return (
        <div>
            <input type={"file"} onChange={(e) => onfileChange(e)} onClick={(e) => e.target.value = null} />
            <table className="tables">
                <thead>
                    <tr>
                        {sheet?.title?.map((val, index) => <th key={index}>{val}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {sheet?.sheetData?.map((val, key) => <tr key={key}>{sheet?.title?.map((key, index) => <td key={index}>{val[key]}</td>)}</tr>)}
                </tbody>
            </table>
            <div>{allsheets?.map((val, index) => <button onClick={() => setSheet(allsheets[index])}>{val.sheetName}</button>)}</div>
            {allsheets?.length > 0 && <button onClick={() => exportFile("tables")}>Download as PDF</button>}
        </div>
    )
}

