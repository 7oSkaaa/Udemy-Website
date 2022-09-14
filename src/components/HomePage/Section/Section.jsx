import React, { useContext } from "react";
import CoursesContent from './CoursesSection/CoursesContent';
import HeaderSection from "./Header/HeaderSection";
import { CoursesContext } from "../../CoursesContext";
import Loader from "../Loader";
import Tabs from './Tabs';
import './Section.css';

export default function Section() {
    
    const { coursesList } = useContext(CoursesContext);

    return (
        <div>
            <HeaderSection/> 
            <Tabs/>
            {coursesList ?  <CoursesContent/> : <Loader/>}
        </div>
    );
}