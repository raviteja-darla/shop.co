import React from 'react'
import './../../index.css'
import Hero_section from './Hero_section'
import BrandsShowcase from './BrandsShowcase'
import NewArrivals from './NewArrivals'
import Homepage_productCat from './Homepage_productCat'

const Home = () => {
    return (
        <div>
            <Hero_section />
            <BrandsShowcase />
            <Homepage_productCat />
            <NewArrivals />
            <NewArrivals />
        </div>
    )
}

export default Home
