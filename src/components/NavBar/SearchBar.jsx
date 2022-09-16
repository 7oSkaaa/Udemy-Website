import React, { createRef, useContext } from "react";
import { useNavigate, createSearchParams } from "react-router-dom";
import { Context } from "../Context";
import './navbar.css';

export default function SearchBar() {
    
    const Navigate = useNavigate();
    const SearchSubmitButtonRef = createRef();
    const SearchInputRef = createRef();
    const { setSearchTerm } = useContext(Context);

    const onClick = (e) => {

        e.preventDefault();
        const searchTerm = SearchInputRef.current.value;
        setSearchTerm(searchTerm);

        Navigate(
            {
                pathname: "/udemy-home-page-React",
                search: searchTerm ? `?${createSearchParams({query: searchTerm})}` : ""
            }
        )

        const CoursesSection = document.getElementById("courses_view");
        CoursesSection.scrollIntoView({behavior: "smooth", block: "start"});

    }
    
    const keyboardPress = (e) => {

        if (e.key === "Enter") {
            e.preventDefault();
            SearchSubmitButtonRef.current.click();
        }
    }

    return (

        <div className='search-container disappear-item'>
            <form className='_form' action="GET">
                <button ref={SearchSubmitButtonRef} type='submit' className='search-icon' onClick={onClick}><span className='material-symbols-outlined'>search</span></button>
                <input ref={SearchInputRef} type='text' className='search-bar _nav-item menu-item' placeholder='Search for anything' name='search' onKeyDown={keyboardPress} required/>
            </form>
        </div>
    )
}