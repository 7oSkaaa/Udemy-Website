import React from 'react'
import Badge from '../../HomePage/Section/CoursesSection/Badge'
import { MdStar } from "react-icons/md";
import './StickyCover.css'

export default function StickyCover({courseData}) {
        
    return (
        <div className='stickyContainer'>
            <div className='stickycover'>
                <div className="sticky_cover_left">
                    <p className='title_cover'>{courseData.title}</p>
                    <div className='_rating_cover'>
                        <div className='_rate_cover'>
                            <span className='rate_number_cover'>{courseData.rating.toPrecision(2)}</span>
                            <MdStar/>
                        </div>
                        <a href='/#' className='review_number_cover'>({courseData.totalreviews} ratings)</a>
                        <span className='subscribers_numbers_cover'>{courseData.enrollments} students</span>
                        {courseData.bestseller ? <Badge badge_text={'Bestseller'}/> : null}
                    </div>
                </div>
                <div className="sticky_cover_right">
                    <p className='course_price_cover'>E£{courseData.price}</p>
                    <button className='buy_now_cover'>Buy now</button>
                </div>
            </div>
        </div>
    )
}
