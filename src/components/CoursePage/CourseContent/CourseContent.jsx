import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { Row, Col } from "react-bootstrap";
import './CourseContent.css'

const MaxShownSection = 7;

function CurriculumSection({idx, sectionData}){

    const [is_expanded, set_is_expanded] = React.useState(0);

    return (
        <div key={idx}>
            <div className="section-header">
                <span className="section-header-title" onClick={() => set_is_expanded(!is_expanded)}>
                    {
                        is_expanded ? 
                            <FontAwesomeIcon icon={solid("angle-up")} />
                        : 
                            <FontAwesomeIcon icon={solid("angle-down")} />
                    }
                    {sectionData.title}
                </span>
                <span className="section-header-info">{sectionData.lecture_count} {sectionData.lecture_count > 1 ? "lectures" : "lecture"} . {sectionData.content_length_text}</span>
            </div>
            {
                is_expanded ? sectionData.items.map((e, idx) => (
                    <div key={idx} className='section-details'>
                        <Row>
                            <Col xs={1}>
                                <FontAwesomeIcon icon={solid("circle-play")}/>
                            </Col>
                            <Col xs={8}>
                                <span className={e.can_be_previewed ? 'is_preview' : ''}>{e.title}</span>
                            </Col>
                            <Col xs={2}>
                                { e.can_be_previewed ? <span className='is_preview'>Preview</span> : <></> }
                            </Col>
                            <Col xs={1}>
                                <span>{e.content_summary}</span>
                            </Col>
                        </Row>
                    </div>
                )) : <></>
            }
        </div>
    )
}

export default function CourseContent({courseData}) {
    
    const [show_more, set_show_more] = React.useState(0);
    const sectionsData = courseData.curriculum_context.data.sections;

    return (
        <div className="course-content">
            <p className='courses-content-header'>Course content</p>
            <div className="details">
                <p>{Object.keys(sectionsData).length} sections | {courseData.num_published_lectures} lectures | {courseData.content_info}</p>
            </div>
            {sectionsData.map((e, idx) => ((show_more || idx < MaxShownSection) ? <CurriculumSection key={idx} sectionData={e} /> : <div key={idx}></div> )) }
            <div className="show-more-less-btn" onClick={()=>set_show_more(!show_more)}>
                {
                    show_more ? 
                        <span>Show less sections <FontAwesomeIcon icon={solid("angle-up")} /></span>
                    :
                        <span>Show more sections <FontAwesomeIcon icon={solid("angle-down")} /></span>
                }
            </div>
        </div>
    )
}
