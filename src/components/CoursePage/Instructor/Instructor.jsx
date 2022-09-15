import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import ShowLessMore from "../ShowLessMore/ShowLessMore";
import './Instructor.css'

function InstructorCard({idx, instructor}){

    const [showMore, set_showMore] = React.useState(0);
    
    return (
        <div key={idx} className='instructor-card'>
            <a href="/#" className="instructor-title"><h5>{instructor.name}</h5></a>
            <h6 className="job-title">{instructor.job}</h6>
            <div className="instructor-img-stats">
                <img className="instructor-img" src={instructor.img} alt={instructor.name} />
                <div className="instructor-stats">
                    <p><FontAwesomeIcon icon={solid("star")} /> {instructor.rating} Instructor Rating</p>
                    <p><FontAwesomeIcon icon={solid("certificate")} /> {instructor.reviews} Reviews</p>
                    <p><FontAwesomeIcon icon={solid("user-group")} /> {instructor.students} Students</p>
                    <p><FontAwesomeIcon icon={solid("circle-play")} /> {instructor.courses} Courses</p>
                </div>
            </div>
            <div className={!showMore ? "section_html_show_more" : "section_html"} dangerouslySetInnerHTML={{ __html: instructor.description }} />
            <ShowLessMore showMore={showMore} set_showMore={set_showMore} />
        </div>
    )

}

export default function Instructions({courseData}) {
    
    const InstructorsData = courseData.instructors;
    const InstructorsList = InstructorsData.map((instructor, idx) => (<InstructorCard key={idx} instructor={instructor} />));

    return (
        <div className="instructors_section" id="Instructor">
            <div className="instructor">
                <h4>Instructors</h4>
                {InstructorsList}
            </div>
        </div>
    )
}