import React from 'react'
import { MdOutlineDone } from 'react-icons/md'
import './WhatYouLearn.css'

export default function WhatYouLearn({courseData}) {
    
    const WhatYouLearnList = courseData.learnitems.map((item, idx) => (<p key={idx} className='learn_target'><MdOutlineDone/>{item.text}</p>));

    return (
        <section className='Objectives-card' id="Overview">
            <div className="what-you-learn">
                <h4>What you'll learn</h4>
                <div className="what-to-learn-list-flex">
                    {WhatYouLearnList}
                </div>
            </div>
        </section>
    )
}
