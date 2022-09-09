import React from 'react'
import { MdOutlineDone } from 'react-icons/md'
import './WhatYouLearn.css'

export default function WhatYouLearn({courseData}) {
    
    const WhatYouLearnList = courseData.objectives_summary.map((item, idx) => (<p key={idx} className='learn_target'><MdOutlineDone/>{item}</p>));

    return (
        <section className='Objectives-card'>
            <div className="what-you-learn">
                <h4>What you'll learn</h4>
                <div className="what-to-learn-list-flex">
                    {WhatYouLearnList}
                </div>
            </div>
        </section>
    )
}
