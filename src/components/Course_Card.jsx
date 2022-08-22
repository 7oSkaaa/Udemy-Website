import '../assets/home-page/Course_Card.css';
import Stars from './Stars';

export default function CourseCard({course}){
    return (
        <div className="course-item">
            <img className="course-img" src={course.image} alt="course"/>
            <h3>{course.title}</h3>
            <p className="author">{course.instructors[0].name}</p>
            <div className="rating">
                <span><p className="rating-score">{course.rating.toFixed(1)}</p></span>
                <span className="stars"><Stars rating={course.rating}/></span>
                <p className="rating-n">({course.people.toLocaleString('en-US')})</p>
            </div>
        </div>
    );
}