import React from "react";
import './header.css';

export default function Header() {
    return (
        <header className="head-continer">
            <div className="head-bar">
                <h1>New to Udemy? Lucky you.</h1>
                <h3>courses start at E£169.99.Get your new-student offer befort it expires.</h3>
            </div>
            <img src="https://i.ibb.co/2qHbQqM/download.png" alt="alarm" className="alarmphoto" />
        </header>
    )
}