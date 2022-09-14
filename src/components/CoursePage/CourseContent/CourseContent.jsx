import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { VscQuestion } from 'react-icons/vsc'
import { AiFillPlayCircle } from 'react-icons/ai'
import { AiOutlineFile } from 'react-icons/ai'
import { Row, Col } from "react-bootstrap";
import './CourseContent.css'

const MaxShownSection = 7;

function Icon({type}){
    if(type.includes('page'))
        return <AiOutlineFile />
    else if(type.includes('question'))
        return <VscQuestion />    
    else
        return <AiFillPlayCircle />
        
}

function CurriculumSection({idx, sectionData}){

    const [is_expanded, set_is_expanded] = React.useState(0);
    const lecture_count = sectionData.totalduration.split(' ')[0];
    const content_length_text = sectionData.totalduration.split(' ').pop();

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
                <span className="section-header-info">{lecture_count} {lecture_count > 1 ? "lectures" : "lecture"} . {content_length_text}</span>
            </div>
            {
                is_expanded ? sectionData.lessons.map((lesson, idx) => { 
                    return (
                        <div key={idx} className='section-details'>
                            <Row>
                                <Col xs={1}>
                                    {<Icon type={lesson.duration}/>}
                                </Col>
                                <Col xs={8}>
                                    <span className={lesson.lessonPreview ? 'is_preview' : ''}>{lesson.name}</span>
                                </Col>
                                <Col xs={1}>
                                    { lesson.lessonPreview ? <span className='is_preview'>Preview</span> : <></> }
                                </Col>
                                <Col xs={2}>
                                    <span className="right_bar">{lesson.duration}</span>
                                </Col>
                            </Row>
                        </div>
                    ) }) : <></>
            }
        </div>
    )
}

export default function CourseContent({courseData}) {
    
    const [show_more, set_show_more] = React.useState(0);
    const sectionsData = courseData.lectures;

    return (
        <div className="course-content" id="Curriculum">
            <p className='courses-content-header'>Course content</p>
            <div className="details">
                <p>{courseData.totallength}</p>
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
