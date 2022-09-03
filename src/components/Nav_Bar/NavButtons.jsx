import React from "react";
import '../../assets/Nav_Bar/navbar.css';
export default function NavButtons() {
    return (
        <div className="nav-buttons disappear-item">
            <button id="_log" type="button">Login</button>
            <button id="_reg" type="button">Sign up</button>
            <button id="_language" type="button"><span class="material-symbols-outlined">language</span></button>
        </div>
    )
}