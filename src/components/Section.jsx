import React from "react";
import CoursesContent from '../components/Courses_Section/Courses_Content.jsx';
import Header from '../components/Header/Header.jsx';
import AboveCourses from '../components/Header/AboveCourses';
import data from "../db.json"
import '../assets/Section.css';

export default function Section() {

    let {header, description, category, courses} = data;

    return (
        <section>
            <Header/>
            <AboveCourses/>
            <CoursesContent  header = {header} description = {description} category = {category} courses = {courses} /> 
        </section>
    );

}