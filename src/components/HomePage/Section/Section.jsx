import React from "react";
import CoursesContent from './CoursesSection/CoursesContent';
import HeaderSection from "./Header/HeaderSection";
import { CoursesContext } from "../../CoursesContext";
import Loader from "../Loader";
import Tabs from './Tabs';
import './Section.css';

export default function Section({SearchTerm}) {
    
    const [curr_tab, set_curr_tab] = React.useState('python_res');
    const { coursesList } = React.useContext(CoursesContext);

    return (
        <div>
            <HeaderSection/> 
            <Tabs curr_tab={curr_tab} set_curr_tab={set_curr_tab}/>
            {coursesList ?  <CoursesContent tab={coursesList[curr_tab]} SearchTerm={SearchTerm}/> : <Loader/>}
        </div>
    );
}