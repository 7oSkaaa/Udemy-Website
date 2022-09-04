import React, { useState } from "react";
import './navbar.css';

export default function SearchBar() {
    
    const [value, setValue] = useState('');

    const onChange = (event) => {
        event.preventDefault();
        setValue(event.target.value);
    }

    const onSearch = (searchTerm) => {
        // to do
    }

    return (

        <li className="search-container disappear-item">
            <form onSubmit={onChange}>
                <button className="search-icon" onClick={() => onSearch(value)}><span className="material-symbols-outlined">search</span></button>
                <input className="search-bar _nav-item menu-item" type="text" placeholder="Search for anything" name="search" value={value} onChange={onChange} required/>
            </form>
        </li>
    )
}