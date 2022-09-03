import React from "react";
import '../../assets/Nav_Bar/navbar.css';
export default function NavButtons() {
    return (
        <div class="nav-buttons disappear-item">
            <button id="log" type="button">Login</button>
            <button id="reg" type="button">Sign up</button>
            <button id="language" type="button"><span class="material-symbols-outlined">language</span></button>
        </div>
    )
}