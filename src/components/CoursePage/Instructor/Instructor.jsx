import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import './Instructor.css'

function InstructorCard({idx, instructor}){

    const [show_more, set_show_more] = React.useState(0);
    
    return (
        <div key={idx} className='instructor-card'>
            <a href="/#" className="instructor-title"><h5>{instructor.title}</h5></a>
            <h6 className="job-title">{instructor.job_title}</h6>
            <div className="instructor-img-stats">
                <img className="instructor-img" src={instructor.image_100x100} alt={instructor.title} />
                <div className="instructor-stats">
                    <p><FontAwesomeIcon icon={solid("star")} /> {instructor.rating} Instructor Rating</p>
                    <p><FontAwesomeIcon icon={solid("certificate")} /> {instructor.reviews} Reviews</p>
                    <p><FontAwesomeIcon icon={solid("user-group")} /> {instructor.students} Students</p>
                    <p><FontAwesomeIcon icon={solid("circle-play")} /> {instructor.courses} Courses</p>
                </div>
            </div>
            <div className={!show_more ? "description-html_show_more" : "description-html"} dangerouslySetInnerHTML={{ __html: instructor.description }} />
            <div className="show-more-less-desc-btn" onClick={() => set_show_more(!show_more)}>
                {
                    show_more ? 
                        <span className="show">Show less <FontAwesomeIcon icon={solid("angle-up")} /></span>
                    : 
                        <span className="show">Show more <FontAwesomeIcon icon={solid("angle-down")} /></span>
                }
            </div>
        </div>
    )

}

export default function Instructions({courseData}) {
    
    const InstructorsData = courseData.visible_instructors;
    const InstructorsList = InstructorsData.map((instructor, idx) => (<InstructorCard key={idx} instructor={instructor} />));

    return (
        <div className="instructors_section">
            <div className="instructor">
                <h4>Instructors</h4>
                {InstructorsList}
            </div>
        </div>
    )
}