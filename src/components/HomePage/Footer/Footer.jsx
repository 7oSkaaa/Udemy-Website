import React from 'react';
import './Footer.css';

export default function Footer() {

    return (
        <footer className="_footer">
            <div className="left_footer">
                <img className="logo" src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg" alt="Logo" />
            </div>
            <div className="right_footer">
                <button id="_language_footer" type="button">
                    <span className="material-symbols-outlined">language</span>
                    <span>English</span>
                </button>
                <p className='copyright'>&copy; 2022 Udemy, Inc.</p>
            </div>
        </footer>
    )
}