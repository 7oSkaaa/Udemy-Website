import React from 'react'
import './NavTabs.css'

export default function NavTabs() {
    
    const onChange = (event) => {
        const tab_id = event.target.id;
        const SectionId = tab_id.split('-')[0];
        const TabSection = document.getElementById(SectionId);
        TabSection.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }
    
    return (
        <div className="nav-tabs-section">
            <div className='courses_tab_bar'>
                <form className="courses-tab">
                    <input onChange={onChange} id="Overview-tab" type="radio" name="courses-tab" defaultChecked={true}/>
                    <label htmlFor="Overview-tab" id="Overview_label" className='course_page_tab_link'>Overview</label>
                    <input onChange={onChange} id="Curriculum-tab" type="radio" name="courses-tab"/>
                    <label htmlFor="Curriculum-tab" id="Curriculum_label" className='course_page_tab_link'>Curriculum</label>
                    <input onChange={onChange} id="Instructor-tab" type="radio" name="courses-tab"/>
                    <label htmlFor="Instructor-tab" id="Instructor_label" className='course_page_tab_link'>Instructor</label>
                    <input onChange={onChange} id="Reviews-tab" type="radio" name="courses-tab" defaultChecked={true}/>
                    <label htmlFor="Reviews-tab" id="Reviews_label" className='course_page_tab_link'>Reviews</label>
                </form>
            </div>
        </div>
    )
}