import React from 'react'
import ProductCategories from '../../components/prodCate/ProductCategories'
import WomenClothing from './../../assets/productCategory/women-clothing.jpg'
import MenClothing from './../../assets/productCategory/men-clothing.jpg'
import BeautyProducts from './../../assets/productCategory/beauty-products.jpg'
import FurnitureProducts from './../../assets/productCategory/furniture-products.jpg'
import HomeApplience from './../../assets/productCategory/home-applince-products.jpg'
import MobileProducts from './../../assets/productCategory/mobile-products.jpg'

const Products = () => {
    const productObject = [
        { prodImg: WomenClothing, prodName: "Women Clothing", to:"/products/womenClothing"},
        { prodImg: MenClothing, prodName: "Men Clothing", to:"/products/menClothing"},
        { prodImg: BeautyProducts, prodName: "Beauty Products", to:"/products/beautyProducts"},
        { prodImg: FurnitureProducts, prodName: "Furniture Products", to:"/products/furnitureProducts"},
        { prodImg: HomeApplience, prodName: "Home Appliances", to:"/products/homeApplience"},
        { prodImg: MobileProducts, prodName: "Mobile Products", to:"/products/mobiles"}
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
