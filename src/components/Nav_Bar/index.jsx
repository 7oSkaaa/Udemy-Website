import React from 'react';
import NavItems from './NavItems';
import NavButtons from './NavButtons';
import './navbar.css';

export default function NavBar ({setSearchTerm, SearchTerm}){
    return (
        <nav className="_navbar">
            <NavItems setSearchTerm={setSearchTerm} SearchTerm={SearchTerm}/>
            <NavButtons />
        </nav>
    )
}