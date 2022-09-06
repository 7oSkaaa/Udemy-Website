import React from 'react';
import './CourseCard.css';
import Stars from './Stars';
import CourseCardHover from './CourseCardHover';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import './CourseCardHover/TippyCard.css';
import 'tippy.js/themes/light.css';

export default function CourseCard({course}){

    const instructors = course.visible_instructors.map(instructor => instructor.title).join(', ');
    const price = parseInt(course.num_published_lectures * course.avg_rating_recent);

    return (
        <Tippy content={<CourseCardHover course={course}/>} interactive={true} interactiveBorder={30} arrow={true} className="tippy_card">
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
        </Tippy>
    );
}