import React, { useState } from 'react'
import ShowLessMore from '../ShowLessMore/ShowLessMore';
import './Descreption.css'

export default function Descreption({courseData}) {
    
    const [showMore, set_showMore] = useState(false);
    const descriptions = courseData.descriptions;

    return (
        <div className='description-section'>
            <div className="description">
                <h4>Description</h4>
                <div className={!showMore ? "section_html_show_more" : "section_html"} dangerouslySetInnerHTML={{ __html: descriptions }} />
                <ShowLessMore showMore={showMore} set_showMore={set_showMore} />
            </div>
        </div>
    )
}
