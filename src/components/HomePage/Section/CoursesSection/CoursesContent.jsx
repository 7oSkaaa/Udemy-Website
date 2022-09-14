import React, { useState, useContext, useLayoutEffect } from 'react';
import './CoursesContent.css';
import CourseCard from './CourseCard';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './PopupCard/TippyCard.css';
import { CgSmileNone } from "react-icons/cg"; 
import { CoursesContext } from '../../../CoursesContext';

export default function CoursesContent() {
    
    const { coursesList, currTab, searchTerm, ScreenDimensions } = useContext(CoursesContext);

    const checkCourse = (course) => {
        const courseKeys = course.title.toLowerCase().split(' ');
        const SearchTermKeys = searchTerm.toLowerCase().split(' ');
        return SearchTermKeys.every((key) => courseKeys.includes(key)) || course.title.toLowerCase().includes(searchTerm.toLowerCase());
    }

    const { Mobile, Tablet, Desktop, Large_Desktop } = ScreenDimensions;
    const { header, description, title, items:courses } = coursesList[currTab];
    const Filtered_Courses = courses.filter(course => checkCourse(course));
    const [SlidesNum, set_SlidesNum] = useState(1);
    const Courses_Cards = Filtered_Courses.map((course, idx) => <CourseCard key={idx} course={course}/>);

    function CompleteCourses(){
        while(Courses_Cards.length < SlidesNum) 
            Courses_Cards.push(<></>);
    }

    useLayoutEffect(() => {
        function updateSize() {
            const win_width = window.innerWidth;
            if(win_width < Mobile.maxWidth)
                set_SlidesNum(1);
            else if(win_width < Tablet.maxWidth)
                set_SlidesNum(3);
            else
                set_SlidesNum(4);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
    }, [Mobile, Tablet, Desktop]);

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: Large_Desktop.maxWidth, min: Large_Desktop.minWidth },
            items: 5
        },
        desktop: {
            breakpoint: { max: Desktop.maxWidth, min: Desktop.minWidth },
            items: 4
        },
        tablet: {
            breakpoint: { max: Tablet.maxWidth, min: Tablet.minWidth },
            items: 3
        },
        mobile: {
            breakpoint: { max: Mobile.maxWidth, min: Mobile.minWidth },
            items: 1
        }
    };
      

    CompleteCourses();
    
    return (
        <div className="courses_content" id="rendered_courses">
            <div className="courses_content_descreption">
                <h2>{header}</h2>
                <p>{description}</p>
                <a className="explore" href="/udemy-home-page-React">Explore {title}</a>
            </div>
            <div className="courses_cards">
                {
                    Filtered_Courses.length ?
                        <Carousel responsive={responsive} containerClass='container' slidesToSlide={SlidesNum} focusOnSelect={true} rewind={true} rewindWithAnimation={true} partialVisible={false} itemClass='course-item' keyBoardControl={true}>
                            {Courses_Cards}
                        </Carousel>
                    :
                        <div className='No_Data_Preview'>
                            <CgSmileNone/>
                            <p className='No_preview_p'>No Courses to preview</p>
                        </div>
                }
            </div>
        </div>
    );
}