import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, ShoppingCart, TextAlignJustify, UserRound, X } from 'lucide-react'
import logo from '../assets/logo.png'
import '../index.css'

const Navigation = () => {
    const [isOpen, setOpen] = useState(false)
    const [isMobSearOpen, setMobSearOpen] = useState(false)

    return (
        <div className="bg-white shadow-xl">
            <nav className='container-wrapper relative z-10 h-18 flex justify-between items-center text-black px-2.5 '>
                <div className="logo w-32">
                    <Link to='/'>
                        <img src={logo} alt="" className='' />
                    </Link>
                </div>

                <div className='hidden md:flex items-center gap-5'>
                    <input 
                        type="text" 
                        className='md:w-70 lg:w-100 bg-gray-300 text-gray-600 text-[15px] rounded-[15px] py-1.5 px-5 outline-none' 
                        placeholder='What your looking for...' 
                    />
                    <div className="nav_links flex gap-5">
                        <Link to='/'>Home</Link>
                        <Link to='/brands'>Brands</Link>
                        <Link to='/products'>Products</Link>
                        <Link to='/cart'> <ShoppingCart /> </Link>
                        <Link to='/profile'> <UserRound /> </Link>
                    </div>
                </div>

                <div className="md:hidden flex justify-center items-center gap-3">
                    <button onClick={() => setMobSearOpen(!isMobSearOpen)}>
                        <Search size={25}/>
                    </button>
                    <button onClick={() => setOpen(!isOpen)}>
                        {isOpen ? <X size={25} /> : <TextAlignJustify size={25} />}
                    </button>
                </div>

                {/* Mobile NavLinks */}
                <div className={`absolute top-[72px] left-0 w-full h-screen bg-white flex flex-col items-center z-50 transform transition-transform duration-500 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"} md:hidden`}>
                    <Link onClick={() => setOpen(false)} className='p-4 border-b border-b-gray-300 w-full text-center' to='/'>Home</Link>
                    <Link onClick={() => setOpen(false)} className='p-4 border-b border-b-gray-300 w-full text-center' to='/brands'>Brands</Link>
                    <Link onClick={() => setOpen(false)} className='p-4 border-b border-b-gray-300 w-full text-center' to='/products'>Products</Link>
                    <Link onClick={() => setOpen(false)} className='p-4 border-b border-b-gray-300 w-full text-center' to='/cart'>Cart</Link>
                    <Link onClick={() => setOpen(false)} className='p-4 border-b border-b-gray-300 w-full text-center' to='/profile'>Profile</Link>
                </div>

            </nav>
            
            {isMobSearOpen && (
                <div className='md:hidden p-2.5'>
                    <input 
                        type="text" 
                        placeholder="What your looking for..." 
                        className='bg-gray-300 text-gray-600 text-[15px] w-full rounded-[15px] py-1.5 px-5 outline-none'
                    />
                </div>
            )}

        </div>
    )
}

export default Navigation