import React, { useState } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { exportFile } from "../../utils";

const json = [
    { id: 1, name: 'senthil', department: 'Trames' },
    { id: 2, name: 'karthik', department: 'AMD' },
    { id: 3, name: 'Vignesh', department: 'Unipick' }
]

const JsPDF = () => {

    
    return (
        <div>

            <table className="tablessss">
                <thead style={{ color: "red" }}>

                    {Object.keys(json[0]).map(val => <th>{val}</th>)}
                </thead>
                <tbody>
                    {json.map(val => <tr>
                        <td>{val.id}</td>
                        <td>{val.name}</td>
                        <td>{val.department}</td>
                    </tr>)}
                </tbody>
            </table>
            <button onClick={() => exportFile("tablessss")} >Export to PDF</button>
        </div>
    )
}

export default JsPDF;

