import React, { memo, useEffect, useState } from 'react'

const Child = ({ children }) => {


    return (
        <div className='CHILD'>
            Child Component
            {children}
        </div>
    )
}

export default memo(Child)