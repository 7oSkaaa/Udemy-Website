import React from 'react'
import './Footer.css'

export default function Footer() {
    return (
        <footer className='footer'>
            <div className='topFooter'>
                <div className='_links'>
                    <a href='/udemy-home-page-React'>Udemy Business</a>
                    <a href='/udemy-home-page-React'>Teach on Udemy</a>
                    <a href='/udemy-home-page-React'>Get the app</a>
                    <a href='/udemy-home-page-React'>About us</a>
                    <a href='/udemy-home-page-React'>Contact us</a>
                </div>
                <div className='_links'>
                    <a href='/udemy-home-page-React'>Careers</a>
                    <a href='/udemy-home-page-React'>Blog</a>
                    <a href='/udemy-home-page-React'>Help and Support</a>
                    <a href='/udemy-home-page-React'>Affiliate</a>
                    <a href='/udemy-home-page-React'>Investors</a>
                </div>
                <div className='_links'>
                    <a href='/udemy-home-page-React'>Terms</a>
                    <a href='/udemy-home-page-React'>Privacy policy</a>
                    <a href='/udemy-home-page-React'>Cookie settings</a>
                    <a href='/udemy-home-page-React'>Sitemap</a>
                    <a href='/udemy-home-page-React'>Accessibility statement</a>
                </div>
                <div className='button'>
                    <button className='Globe_Button'><span className="material-symbols-outlined">language</span><span> English</span></button>
                </div>
            </div>
            <div className='bottomFooter'>
                <img src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg" alt="udemy logo"/>
                <p>© 2022 Udemy, Inc.</p>
            </div>
            <div className='forSticky'>
            </div>
        </footer>
    )
}