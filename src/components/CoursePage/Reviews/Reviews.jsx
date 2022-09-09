import React from 'react'
import './Reviews.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import Stars from '../../HomePage/Section/CoursesSection/CourseCard/Stars';
import { HiOutlineThumbUp, HiOutlineThumbDown } from "react-icons/hi";

const MaxShownComments = 3;

function Review({review}){
    return (
        <div className="review_card">
            <div className="user-review">
                <div className="initials-col d-none d-md-block">
                    <div className="initials">
                        <span>{review.user.initials}</span>
                    </div>
                </div>
                <div>
                    <h5 className="user-name">{review.user.public_display_name}</h5>
                    <div className="user-stars">
                        <Stars rating={review.rating} />
                    </div>
                    <p className="user-comment">{review.content}</p>
                    <p className="was-review-helpful">Was this review helpful?</p>
                    <div className='react-buttons'>
                    <button className="thumbs-btn">
                        <HiOutlineThumbUp/>
                    </button>
                    <button className="thumbs-btn">
                        <HiOutlineThumbDown style={{transform: "scale(-1, 1)"}} />
                    </button>
                    <a href="/#" className="report-user">Report</a>
                    </div>
                </div>
            </div>
        <hr/>
        </div>
    )
}

export default function Reviews({courseData}) {

    const [show_more, set_show_more] = React.useState(0);
    const reviewsData = courseData.users_reviews;

    return (
        <div className="review_section" id="Reviews">
            { reviewsData.map((item, idx) => ((show_more || idx < MaxShownComments) ? <Review key={idx} review={item} /> : <div key={idx}></div> )) }
            <div className="show-more-less-btn" onClick={() => set_show_more(!show_more)}>
                {
                    show_more ? 
                        <span>Show less comments <FontAwesomeIcon icon={solid("angle-up")} /></span>
                    : 
                        <span>Show more comments <FontAwesomeIcon icon={solid("angle-down")} /></span>
                }
            </div>
        </div>
    )

}