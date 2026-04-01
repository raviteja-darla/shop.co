import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'

import Home from '../pages/home-page/Home'
import Brands from '../pages/Brands'
import Products from '../pages/products-page/Products'
import Profile from '../pages/Profile'
import Cart from '../pages/Cart'

import Mobiles from '../pages/products-page/Mobiles'
import BeautyProducts from '../pages/products-page/BeautyProducts'
import FurnitureProducts from '../pages/products-page/FurnitureProducts'
import HomeApplience from '../pages/products-page/HomeApplience'
import MenClothing from '../pages/products-page/MenClothing'
import WomenClothing from '../pages/products-page/WomenClothing'

import ProductDetails from '../pages/products-page/ProductDetails'


const AppRoutes = () => {
    return (
        <div>
            <Routes>
                {/* MainLayOut */}
                <Route element={ <MainLayout /> }>
                    <Route path='/'         element={ <Home /> }    />
                    <Route path='/brands'   element={ <Brands/> }   />
                    <Route path='/products' element={ <Products/> } />
                    <Route path='/profile'  element={ <Profile /> } />
                    <Route path='/cart'     element={ <Cart /> }    />

                    {/* Nested Route */}
                    <Route path='/products/mobiles' element={ <Mobiles /> } />
                    <Route path='/products/mobiles/:id' element={ <ProductDetails /> } />

                    <Route path='/products/beautyProducts' element={ <BeautyProducts /> } />
                    <Route path='/products/beautyProducts/:id' element={ <ProductDetails /> } />

                    <Route path='/products/furnitureProducts' element={ <FurnitureProducts /> } />
                    <Route path='/products/furnitureProducts/:id' element={ <ProductDetails /> } />

                    <Route path='/products/homeApplience' element={ <HomeApplience /> } />
                    <Route path='/products/homeApplience/:id' element={ <ProductDetails /> } />

                    <Route path='/products/menClothing' element={ <MenClothing /> } />
                    <Route path='/products/menClothing/:id' element={ <ProductDetails /> } />

                    <Route path='/products/womenClothing' element={ <WomenClothing /> } />
                    <Route path='/products/womenClothing/:id' element={ <ProductDetails /> } />
                </Route>

                {/* AuthLayOut */}
            </Routes>
        </div>
    )
}

export default AppRoutes
