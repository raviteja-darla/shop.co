import React from 'react'
import './footerStyles.css'

const Subscription = () => {
    return (
        <div className='subscription w-full bg-black text-white p-5 sm:p-12 rounded-[20px] flex flex-col md:flex-row gap-3.5'>
            <div className="subc-col-1 w-full md:w-[50%]">
                <p className='qute text-center'>STAY UP TO DATE ABOUT<br/> OUR LATEST OFFERS</p>
            </div>
            <div className="subc-col-2 w-full md:w-[50%] flex flex-col gap-2.5">
                <input className='w-[85%] md:w-[75%] m-auto bg-white text-gray-600 text-center text-[14px] font-[500] p-2 rounded-[50px]' type="text" placeholder='stifen.robot@gmail.com'/>
                <button className='w-[85%] md:w-[75%] m-auto bg-white text-gray-600 text-[14px] font-[500] p-2 rounded-[50px]'>Subscribe to Newsletter</button>
            </div>
        </div>
    )
}

export default Subscription
