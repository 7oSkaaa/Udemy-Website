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
    
    const [isCoverAppear, set_isCoverAppear] = useState(false);
    const [isCardAppear, set_isCardAppear] = useState(true);
    const { ScreenDimensions } = useContext(CoursesContext);
    const { Mobile, Tablet, Desktop, Large_Desktop } = ScreenDimensions;

    window.onscroll = (e) => {
        const winWidth = window.innerWidth;
        let MaxHeight = 0;
        if(winWidth < Mobile.maxWidth) 
            MaxHeight = Mobile.height;
        else if(winWidth < Tablet.maxWidth)
            MaxHeight = Tablet.height;
        else if(winWidth < Desktop.maxWidth)
            MaxHeight = Desktop.height;
        else
            MaxHeight = Large_Desktop.height;
        console.log(MaxHeight, winWidth);
        if (window.scrollY > MaxHeight) {
            set_isCardAppear(false);
            set_isCoverAppear(true);
        }
        if (window.scrollY < MaxHeight) {
            set_isCardAppear(true);
            set_isCoverAppear(false);
        }
    };

    return (
        <>
            <CourseCover courseData={data} isCoverAppear={isCoverAppear}/>
            <NavTabs/>
            <WhatYouLearn courseData={data}/>
            <CourseCardSticky courseData={data} isCardAppear={isCardAppear}/>
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
