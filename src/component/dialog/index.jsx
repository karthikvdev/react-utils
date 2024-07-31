import React, { useEffect, useState } from "react"

const DialogBox = ({ open, title, onClose, ...props }) => {
    const [openPopup, setOpenPopup] = useState(open)

    useEffect(() => {
        console.log({ open })
        setOpenPopup(open)
    }, [open])

    console.log("openPopup", openPopup);


    return (
        <>
            {openPopup && <div>
                <button onClick={() => { setOpenPopup(false); onClose(false) }}>X</button>
                <dialog open={openPopup} {...props}>
                    <h2>{title}</h2>
                </dialog>
            </div>}
        </>
    )
}

export default DialogBox