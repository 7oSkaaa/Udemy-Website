import React from "react";
import './navbar.css';

export default function SearchBar() {
    return (
        <li className="search-container disappear-item">
            <form action="/action_page">
                <button className="search-icon" type="submit"><span className="material-symbols-outlined">search</span></button>
                <input className="search-bar _nav-item menu-item" type="text" placeholder="Search for anything" name="search" required/>
            </form>
        </li>
    )
}