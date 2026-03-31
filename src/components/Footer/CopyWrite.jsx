import React from 'react'
import PayModes from './../../assets/payment_modes.png'
import './footerStyles.css'

const CopyWrite = () => {
    return (
        <div className='flex flex-col md:flex-row justify-between items-center pb-5 gap-5'>
            <div className="cpyrt-col-1 w-full md:w-[50%} text-[14px] flex justify-center md:justify-start">
                <p>Shop.co ©, Designed by <a href="">Darla Raviteja</a></p>
            </div>
            <div className="cpyrt-col-2 w-full md:w-[50%} flex justify-center md:justify-end">
                <img src={PayModes} alt="" />
            </div>
        </div>
    )
}

export default CopyWrite
