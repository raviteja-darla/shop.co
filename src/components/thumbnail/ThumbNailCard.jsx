import React from 'react'
import ThumbNailCardImage from './../../assets/thumbnailCards/pic1.webp'
import { Star } from 'lucide-react'
import './thumbnailStyles.css'

const ThumbNailCard = ({ className = ""}) => {

    return (
        <div className={`thumbnailCard ${className}`}>
            <div className="tmbnlCd-img overflow-hidden rounded-2xl">
                <img src={ThumbNailCardImage} className="rounded-2xl" />
            </div>
            <div className="tmbnlCd-details py-3 ">
                <div className="tmbnlCd-cardName text-[15px] pb-1.5">T-shirt with Tape Details</div>
                <div className="tmbnlCd-pricing text-[20px] flex items-center gap-2 py-1">
                    <span className="tmbnlCd-actprice">$ 120</span>
                    <span className="tmbnlCd-finalprice">$ 120</span>
                    <span className="tmbnlCd-disct text-[12px] py-1 px-2.5 bg-red-200 text-red-600 rounded-2xl">-20% off </span>
                </div>
                <div className="tmbnlCd-rating flex items-center gap-1.5 text-[12px] w-max py-1 bg-yellow-200 px-2 rounded-2xl">
                    <span><Star size={13}></Star></span>
                    <span>4.5 / 5</span>
                </div>
            </div>
        </div>
    )
}

export default ThumbNailCard
