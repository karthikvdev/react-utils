import React, { useEffect } from "react";

const IndexedDB = () => {
    // const index = indexedDB.open("newDb")
    const handleOnFetchDb = async () => {
        // const showAllDb = await indexedDB.databases()

        console.log("showAllDb");
    }

    useEffect(()=>{
        handleOnFetchDb();
    },[])

    return (
        <div>iNDEX</div>
    )
}

export default IndexedDB;