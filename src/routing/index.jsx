import { Route, Routes } from "react-router-dom";
import CalenderPage from "../page/calenderPage/calender";
import HomePage from "../page";
import JsPDFPage from "../page/jspdfPage";
import XlsxPage from "../page/xlsxPage";
import IndexedDBPage from "../page/indexedDBPage";
import InterSectionObserverPage from "../page/interSectionObserverPage";
import { TestPage } from "../page/testPage";
import GoogleSheetPage from "../page/googleSheetPage";
import Xlsx from "../component/csv";


const Routing = () => {
    return (
        <Routes>
            <Route path="/*" element={<HomePage />} />
            <Route path="/calender" element={<CalenderPage />} />
            <Route path="/pdf" element={<JsPDFPage />} />
            <Route path="/csv" element={<XlsxPage />} />
            <Route path="/xlsx" element={<Xlsx />} />
            <Route path="/indexdb" element={<IndexedDBPage />} />
            <Route path="/intersection" element={<InterSectionObserverPage />}/>
            <Route path="/test" element={<TestPage />} />
            <Route path="/google-sheets" element={<GoogleSheetPage />} />
        </Routes>
    )
}
export default Routing;