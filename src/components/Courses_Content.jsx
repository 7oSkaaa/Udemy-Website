import '../assets/home-page/Courses_Content.css';
import '../assets/home-page/Course_Card.css';
import CourseCard from './Course_Card';

export default function CoursesContent({header,description,category,courses}){
    return (
        <div className="courses_content">
            <div className="courses_content_descreption">
                <h2>{header}</h2>
                <p>{description}</p>
                <a className="explore" href="./index.html">Explore {category}</a>
            </div>
            <div className="courses_cards">
                {courses.map(course => <CourseCard  course = {course}/>)}
            </div>
        </div>
    )
}