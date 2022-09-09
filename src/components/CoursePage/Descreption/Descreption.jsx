import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import './Descreption.css'

export default function Descreption({courseData}) {
    
    const [show_more, set_show_more] = React.useState(0);
    const description = courseData.description;

    return (
        <div className='description-section'>
            <div className="description">
                <h4>Description</h4>
                <div className={!show_more ? "description-html_show_more" : "description-html"} dangerouslySetInnerHTML={{ __html: description }} />
                <div className="show-more-less-desc-btn" onClick={ () => set_show_more(!show_more)}>
                    {
                        show_more ? 
                            <span>Show less <FontAwesomeIcon icon={solid("angle-up")} /></span>
                        : 
                            <span>Show more <FontAwesomeIcon icon={solid("angle-down")} /></span>
                    }
                </div>
            </div>
        </div>
    )
}
