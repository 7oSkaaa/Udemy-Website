import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import './ShowLessMore.css'

export default function ShowLessMore({showMore, set_showMore}) {
    return (
        <div className="show-more-less-desc-btn" onClick={() => set_showMore(!showMore)}>
            {
                showMore ? 
                    <span>Show less <FontAwesomeIcon icon={solid("angle-up")} /></span>
                : 
                    <span>Show more <FontAwesomeIcon icon={solid("angle-down")} /></span>
            }
        </div>
    )
}
