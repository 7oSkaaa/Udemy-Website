import React from 'react'
import Stars from '../../HomePage/Section/CoursesSection/CourseCard/Stars'
import { MdNewReleases, MdLanguage, MdClosedCaption } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { Breadcrumb } from "react-bootstrap"
import './CourseCover.css'

export default function CourseCover({courseData}) {

    const instructors = courseData.visible_instructors.map((instructor, idx) => <a key={idx} href='/#' className='instructors_name'>{instructor.display_name}</a>);
    const price = parseInt(courseData.avg_rating * courseData.num_published_lectures);

    return (
        <div className="course-cover">
            <div className='cover-items'>
                <Breadcrumb className="breadcrumb _path">
                    <Breadcrumb.Item linkAs={Link} linkProps={{to: "/udemy-home-page-React/"}}>Home</Breadcrumb.Item>
                    <Breadcrumb.Item linkAs={HashLink} linkProps={{to: "/udemy-home-page-React/#courses_view"}}>Courses</Breadcrumb.Item>
                    <Breadcrumb.Item active>{courseData.context_info.label.display_name}</Breadcrumb.Item>
                </Breadcrumb>
                <img className='cover_image hidden_items' src={courseData.image_750x422} alt="Course img"/>
                <h3>{courseData.title}</h3>
                <p className='headline'>{courseData.headline}</p>
                <div className='_rating'>
                    <span className='rate_number'>{courseData.rating.toPrecision(2)}</span>
                    <Stars rating={courseData.rating}/>
                    <a href='/#' className='review_number'>({courseData.num_reviews} ratings)</a>
                    <span className='subscribers_numbers'>{courseData.num_subscribers} students</span>
                </div>
                    <div className='instructors'>
                        <p>Created by </p>
                        {instructors}
                    </div>
                    <div className='additional_info'>
                        <div className='last_update_date'>
                            <MdNewReleases/>
                            <p>Last Update {courseData.last_update_date}</p>
                        </div>
                        <div className='language'>
                            <MdLanguage/>
                            <p>{courseData.locale.simple_english_title}</p>
                        </div>
                        {
                            courseData.has_closed_caption ? 
                                <div className='caption'>
                                    <MdClosedCaption/>
                                    <p>{courseData.caption_languages}</p>
                                </div>
                            :   
                                null
                        }
                    </div>
                    <h2 className="price-cover hidden_items">E£{price}</h2>
                    <button className="add-to-cart-cover hidden_items">Add to cart</button>
                    <div className="money-back-cover hidden_items">30-Day Money-Back Guarantee</div>
                    <div className="share-gift-apply-cover hidden_items">
                        <a href='\#' className='links-cover hidden_items'>Share</a>
                        <a href='\#' className='links-cover hidden_items'>Gift this course</a>
                        <a href='\#' className='links-cover hidden_items'>Apply Coupon</a>
                    </div>
            </div>
        </div>
    )
}