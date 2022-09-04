import React from 'react';
import SearchBar from './SearchBar';
import './navbar.css';

export default function NavItems({setSearchTerm, SearchTerm}) {
    return (
        <ul className="_nav-items">
            <button className="menu"><i className="fa fa-align-justify"></i></button>
            <li><img className="logo" src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg" alt="Logo" /></li>
            <li className="_navbar-category"><label>Categories</label></li>
            <SearchBar setSearchTerm={setSearchTerm} SearchTerm={SearchTerm}/>
            <li className="disappear-item" id="udemy-bus"><label>Udemy Business</label></li>
            <li className="disappear-item" id="teach-udemy"><label>Teach on Udemy</label></li>
            <li className="shopping-cart disappear-item"><span className="material-symbols-outlined">shopping_cart</span></li>
        </ul>
    )
}