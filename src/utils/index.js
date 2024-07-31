import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

export const arraySplit = (arr, size) =>    Array.from({ length: Math.ceil(arr.length / size) }, (v, i) => arr.slice(i * size, i * size + size));
export const exportFile = (ele) => {
    html2canvas(document.querySelector(`.${ele}`)).then((canvas) => {
        const imgData = canvas.toDataURL("img/jpeg")
        const doc = new jsPDF('p', 'in', 'a3')
        doc.addImage(imgData, 'JPEG', 0, 0)
        doc.save("sample.pdf")
    }).catch((err) => console.log("errr"))
}