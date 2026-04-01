import React from 'react'
import ThumbNailCard from '../../components/thumbnail/ThumbNailCard'
import CustBtn from '../../components/buttons/CustBtn'
import './../../index.css'

const NewArrivals = () => {
    return (
        <div className='new-arri-sec my-15 '>
            <div className="container-wrapper">
                <h2 className='second-heading mb-10 text-center'>NEW ARRIVALS</h2>
                <div className="thumbnailCards-container flex justify-center items-center gap-3 flex-wrap flex-col md:flex-row">
                    <ThumbNailCard className="w-[290px]"/>
                    <ThumbNailCard className="w-[290px]"/>
                    <ThumbNailCard className="w-[290px]"/>
                    <ThumbNailCard className="w-[290px]"/>
                </div>
                <CustBtn className="mx-auto my-3"/>
            </div>
        </div>
    )
}

export default NewArrivals
