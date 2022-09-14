import React from 'react';
import './App.css';
import HomePage from './components/HomePage';
import { Routes, Route } from 'react-router-dom';
import CoursePage from './components/CoursePage/CoursePage';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { CoursesProvider } from './components/CoursesContext';

export default function App() {
        
    return (
        <CoursesProvider>
            <NavBar/>
            <Routes>
                <Route path="/udemy-home-page-React" element={<HomePage/>} />
                <Route path="/udemy-home-page-React/course_info/:courseTab/:courseIdx" element={<CoursePage/>} />
            </Routes>
            <Footer/>
        </CoursesProvider>
    )
}