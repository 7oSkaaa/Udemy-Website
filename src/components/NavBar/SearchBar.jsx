import React, { useState } from "react";
import './navbar.css';

export default function SearchBar({setSearchTerm, SearchTerm}) {
    
    const [value, setValue] = useState(SearchTerm);

    const onChange = (event) => {
        setValue(event.target.value);
        event.preventDefault();
    }

    const onSearch = (searchTerm) => {
        setSearchTerm(searchTerm);
        const element = document.getElementById("rendered_courses");
        element.scrollIntoView({behavior:"smooth", block: "start", inline:"nearest"});
    }

    const keyboardPress = (event) => {
        if (event.key === 'Enter') 
            onSearch(event.target.value);
    }

    return (

        <li className="search-container disappear-item">
            <div className="_form" onKeyDown={keyboardPress}>
                <button className="search-icon" onClick={() => onSearch(value)}><span className="material-symbols-outlined">search</span></button>
                <input className="search-bar _nav-item menu-item" type="text" placeholder="Search for anything" name="search" value={value || ''} onChange={onChange} required/>
            </div>
        </li>
    )
}