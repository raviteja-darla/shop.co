import React from 'react'
import './custBtnStyles.css'

const CustBtn = ({className = ""}) => {
    return (
        <div className={`${className} w-max`}>
            <button className={`cust-btn ${className} border-[1px] border-gray-300 rounded-[50px] py-2.5 px-15 text-[14px] font-[550]`}>View All</button>
        </div>
    )
}

export default CustBtn
