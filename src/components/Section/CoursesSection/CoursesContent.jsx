import React from 'react';
import './CoursesContent.css';
import CourseCard from './CourseCard';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './PopupCard/TippyCard.css';

export default function CoursesContent({tab, SearchTerm}) {
    
    const {header, description, title:category, items:courses} = tab;
    const Filtered_Courses = courses.filter(course => course.title.toLowerCase().includes(SearchTerm.toLowerCase()));
    const Courses_Cards = Filtered_Courses.map((course, idx) => <CourseCard key={idx} course = {course} className/>);
    const [SlidesNum, set_SlidesNum] = React.useState(1);

    function CompleteCourses(){
        while(Courses_Cards.length < SlidesNum) 
            Courses_Cards.push(<></>);
    }

    React.useLayoutEffect(() => {
        function updateSize() {
            const win_width = window.innerWidth;
            if(win_width < 500)
                set_SlidesNum(1);
            else if(win_width < 800)
                set_SlidesNum(3);
            else
                set_SlidesNum(4);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
    }, []);

    const responsive = {
        desktop: {
            breakpoint: {
                max: 3000,
                min: 1024
            },
            items: 4,
            partialVisibilityGutter: 40
        },
        mobile: {
            breakpoint: {
                max: 464,
                min: 0
            },
            items: 1,
            partialVisibilityGutter: 30
        },
        tablet: {
            breakpoint: {
                max: 1024,
                min: 464
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
                <Carousel responsive={responsive} containerClass='container' slidesToSlide={SlidesNum} focusOnSelect={true} rewind={true} rewindWithAnimation={true} partialVisible={false} itemClass='course-item' keyBoardControl={true}>
                    {Courses_Cards}
                </Carousel>
            </div>
        </div>
    );
}