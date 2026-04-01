import React from 'react'
import ProductCategories from '../components/prodCate/ProductCategories'
import WomenClothing from './../assets/productCategory/women-clothing.jpg'
import MenClothing from './../assets/productCategory/men-clothing.jpg'
import BeautyProducts from './../assets/productCategory/beauty-products.jpg'
import FurnitureProducts from './../assets/productCategory/furniture-products.jpg'
import HomeApplience from './../assets/productCategory/home-applince-products.jpg'
import MobileProducts from './../assets/productCategory/mobile-products.jpg'

const Products = () => {
    const productObject = [
        { prod: WomenClothing, name: "Women Clothing" },
        { prod: MenClothing, name: "Men Clothing" },
        { prod: BeautyProducts, name: "Beauty Products" },
        { prod: FurnitureProducts, name: "Furniture Products" },
        { prod: HomeApplience, name: "Home Appliances" },
        { prod: MobileProducts, name: "Mobile Products" }
    ]
    
    return (
        <div className='my-15'>
            <div className="second-heading text-center">PRODUCT CATEGORIES</div>
            {productObject.map((prod, indx) => {
                return (
                    <div key={indx}>
                        <ProductCategories prod={prod} />
                    </div>
                )
            })}
        </div>
    )
}

export default Products
