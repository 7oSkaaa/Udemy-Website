import React from 'react';
import './navbar.css';

export default function NavItems() {
    return (
        <ul className="_nav-items">
            <button className="menu"><i className="fa fa-align-justify"></i></button>
            <li><img className="logo" src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg" alt="Logo" /></li>
            <li className="_navbar-category"><label>Categories</label></li>
            <li className="search-container disappear-item">
                <form action="/action_page">
                    <button className="search-icon" type="submit"><span className="material-symbols-outlined">search</span></button>
                    <input className="search-bar _nav-item menu-item" type="text" placeholder="Search for anything" name="search" required/>
                </form>
            </li>
            <li className="disappear-item" id="udemy-bus"><label>Udemy Business</label></li>
            <li className="disappear-item" id="teach-udemy"><label>Teach on Udemy</label></li>
            <li className="shopping-cart disappear-item"><span className="material-symbols-outlined">shopping_cart</span></li>
        </ul>
    )
}