import React from 'react'
import {Tabs, Tab} from 'react-bootstrap-tabs';
import './NavTabs.css'

export default function NavTabs() {
    
    const onClick = (label) => {
        const TabSection = document.getElementById(label);
        TabSection.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }

    return (
        <div className='tab_container'>
            <div className='tab_section'>
                <Tabs onSelect={(idx, label) => onClick(label)}>
                    <Tab label="Overview"/>
                    <Tab label="Curriculum"/>
                    <Tab label="Instructor"/>
                    <Tab label="Reviews"/>
                </Tabs>
            </div>
        </div>
    )
}