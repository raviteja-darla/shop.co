import React from 'react'
import './prodCatStyles.css'

const ProductCategories = ({prod}) => {
    return (
        <div className='productCategories py-2.5'>
            <div className="container-wrapper">
                <div className="prod-cat-grid grid grid-cols-3 gap-2.5">
                    <div className="prod-grid border rounded-4xl overflow-hidden col-span-2 ">
                        <img src={prod.prod} className='w-full object-fit object-top' alt="" />
                    </div>
                    <div className="category-name-link rounded-4xl p-3">    
                        {prod.name}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCategories
