import React from "react";
import CoursesContent from './Courses_Section';
import HeaderSection from "./Header";
import data from "./db.json"
import './Section.css';

export default function Section() {

    let {header, description, category, courses} = data;

    return (
        <section>
            <HeaderSection /> 
            <CoursesContent  header = {header} description = {description} category = {category} courses = {courses} /> 
        </section>
    );

}