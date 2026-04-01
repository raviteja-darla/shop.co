import React from 'react'
import ProductCategories from '../../components/prodCate/ProductCategories'
import WomenClothing from './../../assets/productCategory/women-clothing.jpg'
import MenClothing from './../../assets/productCategory/men-clothing.jpg'
import CustBtn from '../../components/buttons/CustBtn'
import { Link } from 'react-router-dom'

const Homepage_productCat = () => {

    const productObject = [
        { prod: WomenClothing, name: "Women Clothing" },
        { prod: MenClothing, name:"Men Clothing" }
    ]

    return (
        <div className='my-15'>
            <div className="second-heading text-center pb-5">PRODUCT CATEGORIES</div>
            {
                productObject.map((prod, indx) => {
                    return (
                        <div key={indx}>
                            <ProductCategories prod={prod} />
                        </div>
                    )
                })
            }
            <Link to="/products" className='flex justify-center items-center mt-10'>
                <CustBtn text={"View All Categories"} />
            </Link>
        </div>
    )
}

export default Homepage_productCat
