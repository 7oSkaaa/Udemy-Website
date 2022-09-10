import React from 'react';
import './CoursesContent.css';
import CourseCard from './CourseCard';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './PopupCard/TippyCard.css';
import data from '../../ScreenDimensions/ScreenDimensions.json';
import { CgSmileNone } from "react-icons/cg"; 

export default function CoursesContent({tab, SearchTerm}) {
    
    const checkCourse = (course) => {
        const courseKeys = course.title.toLowerCase().split(' ');
        const SearchTermKeys = SearchTerm.toLowerCase().split(' ');
        return SearchTermKeys.every((key) => courseKeys.includes(key)) || course.title.toLowerCase().includes(SearchTerm.toLowerCase());
    }

    const {header, description, title:category, items:courses} = tab;
    const Filtered_Courses = courses.filter(course => checkCourse(course));

    const Courses_Cards = Filtered_Courses.map((course, idx) => <CourseCard key={idx} course={course} className/>);
    const [SlidesNum, set_SlidesNum] = React.useState(1);
    const {Mobile, Tablet, Desktop} = data.ScreenDimensions;

    function CompleteCourses(){
        while(Courses_Cards.length < SlidesNum) 
            Courses_Cards.push(<></>);
    }

    React.useLayoutEffect(() => {
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
        desktop: {
            breakpoint: {
                max: Desktop.maxWidth,
                min: Desktop.minWidth
            },
            items: 4,
            partialVisibilityGutter: 40
        },
        mobile: {
            breakpoint: {
                max: Mobile.maxWidth,
                min: Mobile.minWidth
            },
            items: 1,
            partialVisibilityGutter: 30
        },
        tablet: {
            breakpoint: {
                max: Tablet.maxWidth,
                min: Tablet.minWidth
            },
            items: 3,
            partialVisibilityGutter: 30
        }
    };    

    CompleteCourses();
    
    return (
        <div className="courses_content" id="rendered_courses">
            <div className="courses_content_descreption">
                <h2>{header}</h2>
                <p>{description}</p>
                <a className="explore" href="./index.html">Explore {category}</a>
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