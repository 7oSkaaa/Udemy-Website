import React from 'react';
import './App.css';
import HomePage from './components/HomePage';
import { Routes, Route } from 'react-router-dom';
import CoursePage from './components/CoursePage/CoursePage';
import NavBar from './components/HomePage/NavBar';
import Footer from './components/HomePage/Footer';

export default function App() {
    
    const [SearchTerm, setSearchTerm] = React.useState('');

    return (
        <>
            <NavBar SearchTerm={SearchTerm} setSearchTerm={setSearchTerm}/>
            <Routes>
                <Route path="/udemy-home-page-React" element={<HomePage SearchTerm={SearchTerm}/>} />
                <Route path="/udemy-home-page-React/course_info/courseId" element={<CoursePage/>} />
            </Routes>
            <Footer/>
        </>
    )
}