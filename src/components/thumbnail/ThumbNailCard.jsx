import React from 'react'



const ThumbNailCard = () => {
    return (
        <div className='thumbnailCard'>
            <div className="tmbnlCd-img"></div>
            <div className="tmbnlCd-details">
                <div className="tmbnlCd-cardName"></div>
                <div className="tmbnlCd-rating"></div>
                <div className="tmbnlCd-pricing">
                    <span className="tmbnlCd-price"></span>
                    <span className="tmbnlCd-disct"></span>
                </div>
            </div>
        </div>
    )
}

export default ThumbNailCard
