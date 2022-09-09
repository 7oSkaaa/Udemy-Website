import React from 'react';
import NavItems from './NavItems';
import NavButtons from './NavButtons';
import './navbar.css';

export default function NavBar ({setSearchWord}){
    return (
        <nav className="_navbar">
            <NavItems setSearchWord={setSearchWord}/>
            <NavButtons />
        </nav>
    )
}