import React, { useState } from 'react'
import { MdOutlineDone } from 'react-icons/md'
import ShowLessMore from '../ShowLessMore/ShowLessMore';
import './WhatYouLearn.css'

export default function WhatYouLearn({courseData}) {
    
    const [ showMore, set_showMore ] = useState(false);
    const WhatYouLearnList = courseData.learnitems.map((item, idx) => (<p key={idx} className='learn_target'><MdOutlineDone/>{item.text}</p>));
    
    return (
        <section className='Objectives-card' id="Overview">
            <div className="what-you-learn">
                <h4>What you'll learn</h4>
                <div className={!showMore ? "what-to-learn-list-flex section_html_show_more" : "what-to-learn-list-flex"}>
                    {WhatYouLearnList}
                </div>
                <ShowLessMore showMore={showMore} set_showMore={set_showMore}/>
            </div>
        </section>
    )
}
