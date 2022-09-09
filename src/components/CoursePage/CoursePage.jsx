import React from 'react'
import { useParams } from "react-router-dom"
import CourseCover from './CourseCover'
import WhatYouLearn from './WhatYouLearn'
import CourseCardSticky from './CourseCardSticky';
import CourseContent from './CourseContent';
import Requirements from './Requirements';
import Descreption from './Descreption';
import Instructor from './Instructor';
import StudentFeedback from './StudentFeedback';
import Reviews from './Reviews';
import Loader from '../HomePage/Loader';
import { CoursesContext } from "../CoursesContext";

function CourseCardPage({data}) {
    
    return (
        <>
            <CourseCover courseData={data}/>
            <WhatYouLearn courseData={data}/>
            <CourseCardSticky courseData={data}/>
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

    const { courseId } = useParams();
    const { queryCourse } = React.useContext(CoursesContext);
    const courseData = queryCourse(courseId);
    
    return courseData ? <CourseCardPage data={courseData}/> : <Loader/> 
}
