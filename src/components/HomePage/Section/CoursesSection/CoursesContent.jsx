import React, { useContext, useRef, useEffect } from 'react';
import CourseCard from './CourseCard';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './PopupCard/TippyCard.css';
import { CgSmileNone } from "react-icons/cg"; 
import { Context } from '../../../Context';
import { Link } from 'react-router-dom';
import './CoursesContent.css';

export default function CoursesContent() {
    
    const { coursesList, currTab, searchTerm, ScreenDimensions } = useContext(Context);
    const carouselRef = useRef(null);

    const checkCourse = (course) => {
        const courseKeys = course.title.toLowerCase().split(' ');
        const SearchTermKeys = searchTerm.toLowerCase().split(' ');
        return SearchTermKeys.every((key) => courseKeys.includes(key)) || course.title.toLowerCase().includes(searchTerm.toLowerCase());
    }

    useEffect(() => {
        carouselRef.current.goToSlide(0);
    }, [currTab]);

    const { Mobile, Tablet, Desktop, Large_Desktop } = ScreenDimensions;
    const { header, description, title, items:courses } = coursesList[currTab];
    const Filtered_Courses = courses.filter(course => checkCourse(course));
    const Courses_Cards = Filtered_Courses.map((course, idx) => <CourseCard key={idx} course={course}/>);

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: Large_Desktop.maxWidth, min: Large_Desktop.minWidth },
            items: 5,
            partialVisibilityGutter: 1,
            slidesToSlide: 5
        },
        desktop: {
            breakpoint: { max: Desktop.maxWidth, min: Desktop.minWidth },
            items: 4,
            partialVisibilityGutter: 1,
            slidesToSlide: 4
        },
        tablet: {
            breakpoint: { max: Tablet.maxWidth, min: Tablet.minWidth },
            items: 3,
            partialVisibilityGutter: 1,
            slidesToSlide: 3
        },
        mobile: {
            breakpoint: { max: Mobile.maxWidth, min: Mobile.minWidth },
            items: 1,
            partialVisibilityGutter: 1,
            slidesToSlide: 1
        }
    };
      
    function CompleteCourses(){
        const currWidth = window.innerWidth;
        const SlidesNum = currWidth < Mobile.minWidth ? 1 : currWidth < Tablet.minWidth ? 2 : currWidth < Desktop.minWidth ? 3 : 4; 
        while(Courses_Cards.length < SlidesNum)
            Courses_Cards.push(<></>);
    }

    CompleteCourses();
    
    return (
        <div className="courses_content" id="rendered_courses">
            <div className="courses_content_descreption">
                <h2>{header}</h2>
                <p>{description}</p>
                <Link className="explore" to={"/"}>Explore {title}</Link>
            </div>
            <div className="courses_cards">
                {
                    Filtered_Courses.length ?
                        <Carousel responsive={responsive} containerClass='container' rewind={true} rewindWithAnimation={true}  itemClass='course-item' keyBoardControl={true}  autoPlay={true} autoPlaySpeed={5000} draggable={true} swipeable={true} ssr={true} ref={carouselRef}>
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