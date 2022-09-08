import React from 'react';
import ObjComp from './ObjComp';
import Date from './Date';
import Badge from '../Badge';


export default function PopupCard({course}){

    const Badges = course.badges.map((badge, idx) => <Badge key={idx} badge_text={badge.badge_text}/>);

    return (
        <div className="course_card_hover">
            <h2>{course.title}</h2>
            <div className='seller_info'>
                {Badges}
                <Date date={course.last_update_date}/>
            </div>
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