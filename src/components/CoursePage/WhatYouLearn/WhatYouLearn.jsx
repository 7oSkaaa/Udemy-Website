import React, { useState } from 'react'
import { MdOutlineDone } from 'react-icons/md'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import './WhatYouLearn.css'

export default function WhatYouLearn({courseData}) {
    
    const [show_more, set_show_more] = useState(false);
    const WhatYouLearnList = courseData.learnitems.map((item, idx) => (<p key={idx} className='learn_target'><MdOutlineDone/>{item.text}</p>));
    
    return (
        <section className='Objectives-card' id="Overview">
            <div className="what-you-learn">
                <h4>What you'll learn</h4>
                <div className={show_more ? "what-to-learn-list-flex" : "what-to-learn-list-flex hidden_view"}>
                    {WhatYouLearnList}
                </div>
                <div className="show-more-less-desc-btn" onClick={ () => set_show_more(!show_more)}>
                    {
                        show_more ? 
                            <span>Show less <FontAwesomeIcon icon={solid("angle-up")} /></span>
                        : 
                            <span>Show more <FontAwesomeIcon icon={solid("angle-down")} /></span>
                    }
                </div>
            </div>
        </section>
    )
}
