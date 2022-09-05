import React from 'react';
import './Course_Card.css';
import Stars from './Stars';

export default function CourseCard({course}){

    const instructors = course.visible_instructors.map(instructor => instructor.title).join(', ');
    const price = parseInt(course.num_published_lectures * course.avg_rating_recent);

    return (
        <div className="course-item">
            <img className="course-img" src={course.image_750x422} alt="course"/>
            <h3>{course.title}</h3>
            <p className="author">{instructors}</p>
            <div className="rating">
                <span><p className="rating-score">{course.rating.toFixed(1)}</p></span>
                <span className="stars"><Stars rating={course.rating}/></span>
                <p className="rating-n">({course.num_reviews.toLocaleString('en-US')})</p>
            </div>
            <p className="price">E£{price.toLocaleString('en-US')}</p>
        </div>
    );
}