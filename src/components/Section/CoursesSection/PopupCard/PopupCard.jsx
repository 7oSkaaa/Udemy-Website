import React from 'react';
import ObjComp from './ObjComp';
import Date from './Date';

export default function PopupCard({course}){

    return (
        <div className="course_card_hover">
            <h2>{course.title}</h2>
            <Date date={course.last_update_date}/>
            <p className='grey_p'>{course.content_info} . {course.instructional_level} . Subtitle</p>
            <p className='headline'>{course.headline}</p>
            <ObjComp objList={course.objectives_summary} className='objectives'/>
            <div className='hoverbuttons'>
                <button className='_cart'>Add to cart</button>
                <button className=' _fav'><span className="material-symbols-outlined fav_icon">favorite</span></button>
            </div>
        </div>
    )
}