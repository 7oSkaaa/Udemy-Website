import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { VscQuestion } from 'react-icons/vsc'
import { AiFillPlayCircle } from 'react-icons/ai'
import { AiOutlineFile } from 'react-icons/ai'
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

function CurriculumSection({idx, sectionData, is_all_expanded}){

    const [is_expanded, set_is_expanded] = React.useState(is_all_expanded);
    const lecture_count = sectionData.totalduration.split(' ')[0];
    const content_length_text = sectionData.totalduration.split(' ').pop();
    
    useEffect(() => {
        set_is_expanded(is_all_expanded);
    }, [is_all_expanded]);

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
                            <div className="left_section">
                                {<Icon type={lesson.duration}/>}
                                <span className={lesson.lessonPreview ? 'is_preview lesson_name' : 'lesson_name'}>{lesson.name}</span>
                            </div>
                            <div className="right_section">
                                { lesson.lessonPreview ? <span className='is_preview'>Preview</span> : <></> }
                                <span className="right_bar">{lesson.duration}</span>

                            </div>
                        </div>
                    ) }) : <></>
            }
        </div>
    )
}

export default function CourseContent({courseData}) {
    
    const [show_more, set_show_more] = React.useState(false);
    const [is_all_expanded, set_is_all_expanded] = React.useState(false);
    const sectionsData = courseData.lectures;

    return (
        <div className="course-content" id="Curriculum">
            <p className='courses-content-header'>Course content</p>
            <div className="details">
                <p>{courseData.totallength}</p>
                <button className="expanded_button" onClick={() => set_is_all_expanded(!is_all_expanded)}>
                    {is_all_expanded ? "Collapse all sections" : "Expand all sections"}
                </button>
            </div>
            {sectionsData.map((e, idx) => ((show_more || idx < MaxShownSection) ? <CurriculumSection key={idx} sectionData={e} is_all_expanded={is_all_expanded} /> : <div key={idx}></div> )) }
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
