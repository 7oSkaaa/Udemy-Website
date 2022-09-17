import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../Context'
import './Footer.css'


export default function Footer() {
    
    const { YRef } = useContext(Context);

    return (
        <footer className='footer' id='_footer' ref={YRef}>
            <div className='topFooter'>
                <div className='_links'>
                    <a href='/Udemy-Website/'>Udemy Business</a>
                    <a href='/Udemy-Website/'>Teach on Udemy</a>
                    <a href='/Udemy-Website/'>Get the app</a>
                    <a href='/Udemy-Website/'>About us</a>
                    <a href='/Udemy-Website/'>Contact us</a>
                </div>
                <div className='_links'>
                    <a href='/Udemy-Website/'>Careers</a>
                    <a href='/Udemy-Website/'>Blog</a>
                    <a href='/Udemy-Website/'>Help and Support</a>
                    <a href='/Udemy-Website/'>Affiliate</a>
                    <a href='/Udemy-Website/'>Investors</a>
                </div>
                <div className='_links'>
                    <a href='/Udemy-Website/'>Terms</a>
                    <a href='/Udemy-Website/'>Privacy policy</a>
                    <a href='/Udemy-Website/'>Cookie settings</a>
                    <a href='/Udemy-Website/'>Sitemap</a>
                    <a href='/Udemy-Website/'>Accessibility statement</a>
                </div>
                <div className='button'>
                    <button className='Globe_Button'><span className="material-symbols-outlined">language</span><span> English</span></button>
                </div>
            </div>
            <Link className='bottomFooter' to={'/Udemy-Website/'}>
                <img src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg" alt="udemy logo"/>
                <p>© 2022 Udemy, Inc.</p>
            </Link>
            <div className='forSticky'>
            </div>
        </footer>
    )
}