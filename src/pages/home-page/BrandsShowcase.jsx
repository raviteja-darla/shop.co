import React from 'react'
import Calvin from './../../assets/brandShowcase/calvinKlein.png'
import Gucci from './../../assets/brandShowcase/gucci.png'
import Prada from './../../assets/brandShowcase/prada.png'
import Versace from './../../assets/brandShowcase/versace.png'
import Zara from './../../assets/brandShowcase/zara.png'


const BrandsShowcase = () => {
    return (
        <div className='brandsShowcase p-10'>
            <div className='container-wrapper flex itesm-center justify-between flex-wrap'>
                <div>
                    <img src={Calvin} className="grayscale-[25%]" alt="" />
                </div>
                <div>
                    <img src={Gucci} className="grayscale-[25%]" alt="" />
                </div>
                <div>
                    <img src={Prada} className="grayscale-[25%]" alt="" />
                </div>
                <div>
                    <img src={Versace} className="grayscale-[25%]" alt="" />
                </div>
                <div>
                    <img src={Zara} className="grayscale-[25%]" alt="" />
                </div>
                
                
                
                
                
            </div>
        </div>
    )
}

export default BrandsShowcase
