import React from 'react'
import HeroSecImg from './../../assets/Home-page/hero-section.png'
import './homePage-styles.css'
const Hero_section = () => {
    return (
        <div className='hero-section'>
            <div className="container-wrapper flex flex-col md:flex-row">
                <div className="hero-sec-col-1 w-full md:w-[50] flex flex-col justify-center gap-5">
                    <p className="main-heading">
                        FIND CLOTHES <br /> THAT MATCHES <br />YOUR STYLE
                    </p>
                    <p className="sec-para">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                    <div className="btn bg-black text-white rounded-[50px] w-max px-15 py-2.5 cursor-pointer">
                        <button>Shop Now</button>
                    </div>
                    <div className='score-card flex items-center justify-evenly gap-5'>
                        <div className="card-1">
                            <div className="num text-[40px] font-[700] text-center">200+</div>
                            <div className="card-name text-[13px] text-center">International Brand</div>
                        </div>
                        <div className="card-2">
                            <div className="num text-[40px] font-[700] text-center">2000+</div>
                            <div className="card-name text-[13px] text-center">High-Quality Products</div>
                        </div>
                        <div className="card-3">
                            <span className="num text-[40px] font-[700] text-center">3000+</span>
                            <div className="card-name text-[13px] text-center">Happy Customers</div>
                        </div>
                    </div>
                </div>
                <div className="hero-sec-col-2 w-full md:w-[50]">
                    <img src={HeroSecImg} className='' alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero_section
