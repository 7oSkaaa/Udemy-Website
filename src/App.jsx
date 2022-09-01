import React from 'react';
import './assets/App.css';
import CoursesContent from './components/Courses_Content.jsx';
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