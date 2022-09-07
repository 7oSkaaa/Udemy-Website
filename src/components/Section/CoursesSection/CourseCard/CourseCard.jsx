import React from 'react';
import Stars from './Stars';
import PopupCard from '../PopupCard/PopupCard';
import Badge from '../Badge';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import './CourseCard.css';
import '../PopupCard/TippyCard.css';


export default function CourseCard({course}){

    const instructors = course.visible_instructors.map(instructor => instructor.title).join(', ');
    const price = parseInt(course.num_published_lectures * course.avg_rating_recent);
    const Badges = course.badges.map((badge, idx) => <Badge key={idx} badge_text={badge.badge_text}/>);

    const popover = (props) => (
        <Popover id="button-tooltip" {...props}>
          <PopupCard course={course}/>
        </Popover>
    );
    
    return (
        <OverlayTrigger delay={{ show: 250, hide: 250 }} className='tippycard' overlay={popover} placement='top-end' trigger={['hover', 'focus']} interactive={true}>
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
        </OverlayTrigger>
    );
}