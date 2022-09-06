import React from 'react';
import './CoursesContent.css';
import './CourseCard.css';
import CourseCard from './CourseCard.jsx';

export default function CoursesContent({tab, SearchTerm}) {
    
    const {header, description, title:category, items:courses} = tab;
    const Filtered_Courses = courses.filter(course => course.title.toLowerCase().includes(SearchTerm.toLowerCase()));
    const Courses_Cards = Filtered_Courses.map((course, idx) => <CourseCard key={idx} course = {course}/>);

    return (
        <div className="courses_content" id="rendered_courses">
            <div className="courses_content_descreption">
                <h2>{header}</h2>
                <p>{description}</p>
                <a className="explore" href="./index.html">Explore {category}</a>
            </div>
            <div className="courses_cards">
                {Courses_Cards}
            </div>
        </div>
    );
}