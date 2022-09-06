import React from 'react';
import Stars from './Stars';
import PopupCard from '../PopupCard/PopupCard';
import Tippy from '@tippyjs/react';
import Badge from '../Badge';
import 'tippy.js/dist/tippy.css';
import '../PopupCard/TippyCard.css';
import './CourseCard.css';

export default function CourseCard({course}){

    const instructors = course.visible_instructors.map(instructor => instructor.title).join(', ');
    const price = parseInt(course.num_published_lectures * course.avg_rating_recent);
    const Badges = course.badges.map((badge, idx) => <Badge key={idx} badge_text={badge.badge_text}/>);

    return (
        <Tippy content={<PopupCard course={course}/>} interactive={true} interactiveBorder={30} arrow={true} className="tippy_card">
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
                {Badges}
            </div>
        </Tippy>
    );
}