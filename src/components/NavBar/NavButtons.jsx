import React from "react";
import './navbar.css';

export default function NavButtons() {
    return (
        <div className="nav-buttons disappear-item">
            <button id="_log" type="button">Login</button>
            <button id="_reg" type="button">Sign up</button>
            <button id="_language" type="button"><span className="material-symbols-outlined">language</span></button>
        </div>
    )
}