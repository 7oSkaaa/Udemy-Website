import React, { useContext } from 'react';
import ObjComp from './ObjComp';
import Date from './Date';
import Badge from '../Badge';
import { Context } from '../../../../Context';

export default function PopupCard({course}){

    const totalHours = course.video_content_length.split(' ')[0];
    const { currTab } = useContext(Context);

    return (
        <div className="course_card_hover">
            <a href={`/Udemy-Website/course_info/${currTab}/${course.id}`} className="course_card_title">{course.title}</a>
            <div className='seller_info'>
                {course.bestseller ? <Badge badge_text={'Bestseller'}/> : <></>}
                <Date date={course.lastupdated}/>
            </div>
            <p className='grey_p'>{totalHours} total hours . Beginner Level . Subtitle</p>
            <p className='popup_card_headline'>{course.description}</p>
            <ObjComp objList={course.learnitems} className='objectives'/>
            <div className='hoverbuttons'>
                <button className='_cart'>Add to cart</button>
                <button className=' _fav'><span className="material-symbols-outlined fav_icon">favorite</span></button>
            </div>
        </div>
    )
}