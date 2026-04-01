// import React from 'react'
// import ThumbNailCardImage from './../../assets/thumbnailCards/pic1.webp'
// import { Star } from 'lucide-react'
// import './thumbnailStyles.css'

// const ThumbNailCard = ({ className = "", item}) => {
    
//     const discount = Math.floor(Math.random() * 40) + 10
//     const afterDiscount = Math.floor(item.price - (item.price * discount) / 100)

//     return (
//         <div className={`thumbnailCard ${className} `}>
//             <div className="tmbnlCd-img overflow-hidden rounded-2xl">
//                 <img src={item.thumbnail} className="rounded-2xl" />
//             </div>
//             <div className="tmbnlCd-details py-3 text-center ">
//                 <div className="tmbnlCd-cardName text-[15px] pb-1.5">{item.title}</div>
//                 <div className="tmbnlCd-pricing text-[20px] flex items-center justify-center gap-2 py-1">
//                     <span className="tmbnlCd-actprice">$ {item.price}</span>
//                     <span className="tmbnlCd-finalprice">$ {afterDiscount}</span>
//                     <span className="tmbnlCd-disct text-[12px] py-1 px-2.5 bg-red-200 text-red-600 rounded-2xl">{discount}% off </span>
//                 </div>
//                 <div className="tmbnlCd-rating flex items-center gap-1.5 text-[12px] w-max py-1 bg-yellow-200 px-2 rounded-2xl">
//                     <span><Star size={13}></Star></span>
//                     <span>{item.rating}</span>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default ThumbNailCard



import React, { useMemo } from "react";
import { Star } from "lucide-react";
import "./thumbnailStyles.css";

const ThumbNailCard = ({ className = "", item }) => {
    // Safety check
    if (!item) return null;

    // Stable discount (won’t change on re-render)
    const discount = useMemo(() => {
        return Math.floor(Math.random() * 40) + 10;
    }, []);

    const afterDiscount = Math.floor(
        item.price - (item.price * discount) / 100
    );

    return (
        <div className={`thumbnailCard ${className}`}>
        {/* Image */}
        <div className="tmbnlCd-img overflow-hidden rounded-2xl">
            <img
                src={item.thumbnail}
                alt={item.title}
                className="rounded-2xl w-full h-full object-cover"
            />
        </div>

        {/* Details */}
        <div className="tmbnlCd-details py-3 text-center">
            <div className="tmbnlCd-cardName text-[15px] pb-1.5">
                {item.title}
            </div>

            {/* Pricing */}
            <div className="tmbnlCd-pricing text-[20px] flex items-center justify-center gap-2 py-1">
                <span className="tmbnlCd-actprice line-through text-gray-400">
                    ${item.price.toFixed(2)}
                </span>

                <span className="tmbnlCd-finalprice font-semibold text-green-600">
                    ${afterDiscount.toFixed(2)}
                </span>

                <span className="tmbnlCd-disct text-[12px] py-1 px-2.5 bg-red-200 text-red-600 rounded-2xl">
                    {discount}% OFF
                </span>
            </div>

            {/* Rating */}
            <div className="tmbnlCd-rating flex items-center gap-1.5 text-[12px] w-max py-1 px-2 rounded-2xl mx-auto">
                <Star size={13} fill="currentColor" />
                <span>{item.rating.toFixed(1)}</span>
            </div>
        </div>
        </div>
    );
};

export default ThumbNailCard;
