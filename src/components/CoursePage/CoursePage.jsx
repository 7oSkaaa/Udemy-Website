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
import { CoursesContext } from "../CoursesContext";

function CourseCardPage({data}) {
    
    const [ isCoverAppear, set_isCoverAppear ] = useState(false);
    const [ isCardAppear, set_isCardAppear ] = useState(true);
    const [ isStickyCardDisappear, set_isStickyCardDisappear ] = useState(false);
    const { ScreenDimensions } = useContext(CoursesContext);
    const { Mobile, Tablet, Desktop, Large_Desktop } = ScreenDimensions;

    window.onscroll = (e) => {

        const winWidth = window.innerWidth;
        let MaxCoverHeight = 0, MaxCardHeight = 0;

        if(winWidth < Mobile.maxWidth) {
            MaxCoverHeight = Mobile.coverHeight; 
            MaxCardHeight = Mobile.CardHeight;
        }
        else if(winWidth < Tablet.maxWidth){
            MaxCoverHeight = Tablet.coverHeight; 
            MaxCardHeight = Tablet.CardHeight;
        }
        else if(winWidth < Desktop.maxWidth){
            MaxCoverHeight = Desktop.coverHeight; 
            MaxCardHeight = Desktop.CardHeight;
        }
        else {
            MaxCoverHeight = Large_Desktop.coverHeight; 
            MaxCardHeight = Large_Desktop.CardHeight;
        }
        set_isCardAppear(window.scrollY < MaxCoverHeight);
        set_isCoverAppear(window.scrollY > MaxCoverHeight);
        set_isStickyCardDisappear(window.scrollY > MaxCardHeight);
    };

    return (
        <>
            <CourseCover courseData={data} isCoverAppear={isCoverAppear}/>
            <NavTabs/>
            <WhatYouLearn courseData={data}/>
            <CourseCardSticky courseData={data} isCardAppear={isCardAppear} isStickyCardDisappear={isStickyCardDisappear}/>
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
    const { queryCourse } = useContext(CoursesContext);
    const courseData = queryCourse(courseTab, courseIdx);

    return courseData ? <CourseCardPage data={courseData}/> : <Loader/> 
}
