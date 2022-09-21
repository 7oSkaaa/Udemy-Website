import React, { useContext } from 'react';
import Stars from './Stars';
import PopupCard from '../PopupCard/PopupCard';
import Badge from '../Badge';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import { Link } from 'react-router-dom';
import './CourseCard.css';
import '../PopupCard/TippyCard.css';
import { Context } from '../../../../Context';

function adjust_img(img){
    img = img.split('/');
    img[4] = '750x422';
    img = img.join('/');
    return img;
}

export default function CourseCard({course}){

    const instructors = course.instructors.map(instructor => instructor.name).join(', ');
    const { currTab } = useContext(Context);
    
    const popover = (props) => (
        <Popover id="button-tooltip" {...props}>
          <PopupCard course={course}/>
        </Popover>
    );
    
    return (
        <OverlayTrigger delay={{ show: 150, hide: 150 }} className='tippycard' overlay={popover} placement='top-end' trigger={['hover', 'focus']} interactive={true}>
            <Link className="course-item" to={`/course_info/${currTab}/${course.id}`}>
                <img className="course-img" src={adjust_img(course.img)} alt="course"/>
                <h3 className="course-title">{course.title}</h3>
                <p className="author">{instructors}</p>
                <div className="rating">
                    <span><p className="rating-score">{course.rating.toFixed(1)}</p></span>
                    <span className="stars"><Stars rating={course.rating}/></span>
                    <p className="rating-n">({course.totalreviews.toLocaleString('en-US')})</p>
                </div>
                <p className="course-price">E£{course.price} {course.oldprice !== course.price ? <s className="__discount-card">{course.oldprice}</s> : null}</p>
                {course.bestseller ? <Badge badge_text={'Bestseller'}/> : <></>}
            </Link>
        </OverlayTrigger>
    );
}