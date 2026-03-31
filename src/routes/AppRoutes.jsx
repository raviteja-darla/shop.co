import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'

import Home from '../pages/home-page/Home'
import Brands from '../pages/Brands'
import Products from '../pages/Products'
import Profile from '../pages/Profile'
import Cart from '../pages/Cart'


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
                </Route>

                {/* AuthLayOut */}
            </Routes>
        </div>
    )
}

export default AppRoutes
