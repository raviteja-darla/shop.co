import React from 'react'
import './footerStyles.css'
import '../../index.css'
import Subscription from './Subscription'
import FooterLinks from './FooterLinks'
import CopyWrite from './CopyWrite'

const Footer = () => {
    return (
        <div className='footer-wrapper mt-[170px]'>
            <div className="container-wrapper relative">
                <Subscription />
                <FooterLinks />
                <CopyWrite />
            </div>
        </div>
    )
}

export default Footer
