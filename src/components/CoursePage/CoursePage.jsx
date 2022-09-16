import React, { useState, useContext } from 'react';
import CourseCover from './CourseCover';
import { useParams } from 'react-router-dom';
import WhatYouLearn from './WhatYouLearn';
import CourseCardSticky from './CourseCardSticky';
import CourseContent from './CourseContent';
import Requirements from './Requirements';
import Descreption from './Descreption';
import Instructor from './Instructor';
import StudentFeedback from './StudentFeedback';
import Reviews from './Reviews';
import Loader from '../HomePage/Loader';
import NavTabs from './NavTabs';
import { Context } from "../Context";


function CourseCardPage({data}) {
    
    const [isCoverAppear, set_isCoverAppear] = useState(false);
    const [isCardAppear, set_isCardAppear] = useState(true);
    const [InBack, set_InBack] = useState(false);
    const { ScreenDimensions, YRef, setYLimit, YLimit } = useContext(Context);
    const { Mobile, Tablet, Desktop, Large_Desktop } = ScreenDimensions;
    
    window.onscroll = (e) => {

        const winWidth = window.innerWidth;
        const winHeight = window.innerHeight;
        setYLimit(YRef.current.offsetTop - winHeight);
        let MaxCoverHeight = 0;
        if(winWidth < Mobile.maxWidth)
            MaxCoverHeight = Mobile.coverHeight;
        else if(winWidth < Tablet.maxWidth)
            MaxCoverHeight = Tablet.coverHeight;
        else if(winWidth < Desktop.maxWidth)
            MaxCoverHeight = Desktop.coverHeight; 
        else 
            MaxCoverHeight = Large_Desktop.coverHeight;
        set_isCardAppear(window.scrollY < MaxCoverHeight);
        set_isCoverAppear(window.scrollY > MaxCoverHeight);
        set_InBack(window.scrollY > YLimit);
    };

    return (
        <>
            <CourseCardSticky courseData={data} isCardAppear={isCardAppear} InBack={InBack}/>
            <CourseCover courseData={data} isCoverAppear={isCoverAppear}/>
            <NavTabs/>
            <WhatYouLearn courseData={data}/>
            <CourseContent courseData={data}/>
            <Requirements courseData={data}/>
            <Descreption courseData={data}/>
            <Instructor courseData={data}/>
            <StudentFeedback courseData={data}/>
            <Reviews courseData={data}/>
        </>
    )
}

export default function CoursePage(){
    const { courseTab, courseIdx } = useParams();
    const { queryCourse } = useContext(Context);
    const courseData = queryCourse(courseTab, courseIdx);

    return courseData ? <CourseCardPage data={courseData}/> : <Loader/> 
}
