import React from 'react'
import ThumbNailCard from '../../components/thumbnail/ThumbNailCard'

const NewArrivals = () => {
    return (
        <div className='new-arri-sec'>
            <div className="container-wrapper">
                <h2 className='my-15 text-center'>NEW ARRIVALS</h2>
                <div className="thumbnailCards-container">
                    <ThumbNailCard />
                    <ThumbNailCard />
                    <ThumbNailCard />
                    <ThumbNailCard />
                    <ThumbNailCard />
                </div>
            </div>
        </div>
    )
}

export default NewArrivals
