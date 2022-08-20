import './assets/App.css';
import CourseCard from './components/Course_Card';
import CoursesContent from './components/Courses_Content';
import data from "./db.json"

function App() {
  
  let {header,description,category} = data;
  
  return (
    <div style={{padding : '1rem 11.4rem '}}> 
        <CoursesContent  header = {header} description = {description} category = {category} >
            {data.courses.map(course => <CourseCard  course = {course} key = {course.id}/>)}
        </CoursesContent>
    </div>
  );
}

export default App;