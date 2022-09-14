import React, { useContext } from "react";
import AboveCourses from "./AboveCourses";
import Header from "./Header";
import { CoursesContext } from "../../../CoursesContext";

export default function HeaderSection() {
    
    const { coursesList } = useContext(CoursesContext);
    
    return (
        <div>
            <Header />
            {coursesList ? <AboveCourses /> : null}
        </div>
    );
}