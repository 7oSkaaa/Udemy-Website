import React from 'react';
import './Courses_Content.css';
import './Course_Card.css';
import CourseCard from './Course_Card.jsx';

export default function CoursesContent({header,description,category,courses}){

    const Courses_Cards = courses.map(course => <CourseCard  course = {course}/>);

    return (
        <div className="courses_content">
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