import React, { useContext } from 'react'
import Stars from '../../HomePage/Section/CoursesSection/CourseCard/Stars'
import Badge from '../../HomePage/Section/CoursesSection/Badge'
import StickyCover from '../StickyCover' 
import { MdNewReleases, MdLanguage, MdClosedCaption } from 'react-icons/md'
import { Context } from '../../Context'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { Breadcrumb } from "react-bootstrap"
import { IoMdAlarm } from 'react-icons/io'
import { BiPlay } from 'react-icons/bi'
import './CourseCover.css'

function adjust_img(img){
    img = img.split('/');
    img[4] = '750x422';
    img = img.join('/');
    return img;
}

export default function CourseCover({courseData, isCoverAppear}) {

    const instructors = courseData.instructors.map(instructor => instructor.name).join(', ');
    const { currTab, Categories } = useContext(Context);
    const currCategory = Categories[currTab];

    return (
        <div className="course-cover">  
            <div className='cover-items'>
                <Breadcrumb className="breadcrumb _path">
                    <Breadcrumb.Item linkAs={Link} linkProps={{to: "/"}}>Home</Breadcrumb.Item>
                    <Breadcrumb.Item linkAs={HashLink} linkProps={{to: "/#courses_view"}}>Courses</Breadcrumb.Item>
                    <Breadcrumb.Item active>{currCategory}</Breadcrumb.Item>
                </Breadcrumb>
                <div className="Card_header_cover hidden_items">
                    <BiPlay/>
                    <p className="on_photo_cover">Preview this course</p>
                    <img src={adjust_img(courseData.img)} alt="Course img" className="photo_cover"/>
                </div>
                <h3>{courseData.title}</h3>
                <p className='headline'>{courseData.description}</p>
                <div className='_rating'>
                    {courseData.bestseller ? <Badge badge_text={'Bestseller'}/> : null}
                    <div className='_rate'>
                        <span className='rate_number'>{courseData.rating.toPrecision(2)}</span>
                        <Stars rating={courseData.rating}/>
                    </div>
                    <Link to={`/course_info/${currTab}/${courseData.id}`} className='review_number'>({courseData.totalreviews} ratings)</Link>
                    <span className='subscribers_numbers'>{courseData.enrollments} students</span>
                </div>
                    <div className='instructors'>
                        <span className='instructors_name'><span className='Created_By'>Created by </span>{instructors}</span>
                    </div>
                    <div className='additional_info'>
                        <div className='last_update_date'>
                            <MdNewReleases/>
                            <p>Last Update {courseData.lastupdated}</p>
                        </div>
                        <div className='language'>
                            <MdLanguage/>
                            <p>{courseData.locale}</p>
                        </div> 
                        <div className='caption'>
                            <MdClosedCaption/>
                            <p>{courseData.caption}</p>
                        </div>
                    </div>
                    <div className="price_cover hidden_items">
                        <p>E£{courseData.price}</p> 
                        {courseData.discount_percentage ? <s className="__discount_cover">{courseData.oldprice}</s> : null} 
                        {courseData.discount_percentage ? <span className="discount_per_cover">{courseData.discount_percentage}% off</span> : null}
                    </div>
                    {
                        courseData.discount_percentage ? 
                            <div className="expire_date_cover hidden_items">
                                <IoMdAlarm/>
                                <p dangerouslySetInnerHTML={{ __html: courseData.discount_expiration }} />
                            </div>
                        :
                            null
                    }
                    <button className="add-to-cart-cover hidden_items">Add to cart</button>
                    <div className="money-back-cover hidden_items">30-Day Money-Back Guarantee</div>
                    <div className="share-gift-apply-cover hidden_items">
                        <a href='\#' className='links-cover hidden_items'>Share</a>
                        <a href='\#' className='links-cover hidden_items'>Gift this course</a>
                        <a href='\#' className='links-cover hidden_items'>Apply Coupon</a>
                    </div>
            </div>
            {
                isCoverAppear ?
                    <StickyCover courseData={courseData}/>
                :
                    null
            }
        </div>
    )
}