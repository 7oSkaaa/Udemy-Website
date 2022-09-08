import React from "react";
import CategoriesSections from "./CategoriesSections";
import Loader from "../Loader";
import { CoursesContext } from "../../CoursesContext";
import './Category.css';
import 'bootstrap/dist/css/bootstrap.css';

export default function Categories() {

    return (
        <CoursesContext.Consumer>
            {
                ({topCategories}) => 
                (
                    topCategories ? <CategoriesSections categoryList={topCategories} className='categories_sections'/> : <Loader/>
                ) 
            }
        </CoursesContext.Consumer>
    )

}