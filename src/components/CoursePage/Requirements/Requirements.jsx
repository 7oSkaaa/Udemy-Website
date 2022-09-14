import React from 'react'
import './Requirements.css'

export default function Requirements({courseData}) {
    
    const requirementsData = courseData.requirements;
    const requirementsList = requirementsData.map((item, idx) => (<li key={idx}>{item.text}</li>));

    return (
        <div className="requirements-section">
            <div className="requirements">
                <h4>Requirements</h4>
                <ul className="requirements-list">
                    {requirementsList}
                </ul>
            </div>
        </div>
    )
}