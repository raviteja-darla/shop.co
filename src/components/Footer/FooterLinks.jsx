import Github from './../../assets/icons/github.png'
import Instagram from './../../assets/icons/instagram.png'
import Linkedin from './../../assets/icons/linkedin.png'
import X from './../../assets/icons/twitter.png'
import Logo from './../../assets/logo.png'
import { Link } from 'react-router-dom'
import './footerStyles.css'

const FooterLinks = () => {
    return (
        <div className='footer_links flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap'>
            <div className="ftr-Lks-col-1 w-full md:w-[50%] lg:w-[25%] p-3.5 flex flex-col justify-between">
                <Link to='/'><img src={Logo} alt="" /></Link>
                <p className='text-[14px]'>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
                <div className='flex justify-start gap-5'>
                    <div className="scl_mmid_links">
                        <img src={Github} alt="" />
                    </div>
                    <div className="scl_mmid_links">
                        <img src={Instagram} alt="" />
                    </div>
                    <div className="scl_mmid_links">
                        <img src={Linkedin} alt="" />
                    </div>
                    <div className="scl_mmid_links">
                        <img src={X} alt="" />
                    </div>
                </div>

            </div>
            <div className="ftr-Lks-col-2 w-full md:w-[50%] lg:w-[25%] flex flex-col p-3.5 gap-3">
                <div className="col-heading font-[400] text-[20px]">Company</div>
                <Link className='ftr-lk-link' to='/'>Home</Link>
                <Link className='ftr-lk-link' to='/brands'>Brands</Link>
                <Link className='ftr-lk-link' to='/products'>Products</Link>
                <Link className='ftr-lk-link' to='/profile'>Profile</Link>
                <Link className='ftr-lk-link' to='/cart'>Cart</Link>
            </div>
            <div className="ftr-Lks-col-3 w-full md:w-[50%] lg:w-[25%] flex flex-col p-3.5 gap-3">
                <div className="col-heading font-[400] text-[20px]">Help</div>
                <Link className='ftr-lk-link' to='/'>Customer support</Link>
                <Link className='ftr-lk-link' to='/'>Delivery details</Link>
                <Link className='ftr-lk-link' to='/'>Terms & conditions</Link>
                <Link className='ftr-lk-link' to='/'>Privacy policy</Link>
            </div>
            <div className="ftr-Lks-col-4 w-full md:w-[50%] lg:w-[25%] flex flex-col p-3.5 gap-3">
                <div className="col-heading font-[400] text-[20px]">Faq</div>
                <Link className='ftr-lk-link' to='/'>Account</Link>
                <Link className='ftr-lk-link' to='/'>Manage deliveries</Link>
                <Link className='ftr-lk-link' to='/'>Orders</Link>
                <Link className='ftr-lk-link' to='/'>Payments</Link>
            </div>
            <div className="ftr-Lks-col-5 w-full md:w-[50%] lg:w-[25%] flex flex-col p-3.5 gap-3">
                <div className="col-heading font-[400] text-[20px]">Resources</div>
                <Link className='ftr-lk-link' to='/'>Free eBooks</Link>
                <Link className='ftr-lk-link' to='/'>Development tutorial</Link>
                <Link className='ftr-lk-link' to='/'>How to - Blog</Link>
                <Link className='ftr-lk-link' to='/'>Youtube playlist</Link>
            </div>
        </div>
    )
}

export default FooterLinks
