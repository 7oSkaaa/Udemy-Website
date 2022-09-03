import React from 'react';
import '../../assets/Nav_Bar/navbar.css';

export default function NavItems() {
    return (
        <ul class="nav-items">
            <button class="menu"><i class="fa fa-align-justify"></i></button>
            <li><img class="logo" src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg" alt="Logo" /></li>
            <li class="navbar-category"><label>Categories</label></li>
            <li class="search-container disappear-item">
                <form action="/action_page">
                    <button class="search-icon" type="submit"><span class="material-symbols-outlined">search</span></button>
                    <input class="search-bar nav-item menu-item" type="text" placeholder="Search for anything" name="search" required/>
                </form>
            </li>
            <li class="disappear-item" id="udemy-bus"><label>Udemy Business</label></li>
            <li class="disappear-item" id="teach-udemy"><label>Teach on Udemy</label></li>
            <li class="shopping-cart disappear-item"><span class="material-symbols-outlined">shopping_cart</span></li>
        </ul>
    )
}