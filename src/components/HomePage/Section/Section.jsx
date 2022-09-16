import React, { useContext } from "react";
import CoursesContent from './CoursesSection/CoursesContent';
import HeaderSection from "./Header/HeaderSection";
import { Context } from "../../Context";
import Loader from "../Loader";
import Tabs from './Tabs';
import './Section.css';

export default function Section() {
    
    const { coursesList } = useContext(Context);

    return (
        <div>
            <HeaderSection/> 
            {coursesList ? <Tabs/> : null}
            {coursesList ?  <CoursesContent/> : <Loader/>}
        </div>
    );
}