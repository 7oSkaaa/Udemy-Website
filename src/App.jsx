import './assets/App.css';
import CourseCard from './components/Course_Card';
import CoursesContent from './components/Courses_Content';
import data from "./db.json"

function App() {
  
    let {header,description,category, courses} = data;
  
    return (
        <div> 
            <CoursesContent  header = {header} description = {description} category = {category} courses = {courses}> 
            </CoursesContent>
        </div>
    );
}

export default App;