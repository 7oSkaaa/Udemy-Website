import React from 'react';
import './App.css';
import HomePage from './components/HomePage';
import { Routes, Route } from 'react-router-dom';
import CoursePage from './components/CoursePage/CoursePage';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { CoursesProvider } from './components/CoursesContext';

export default function App() {
    
    const [SearchTerm, setSearchTerm] = React.useState('');

    return (
        <CoursesProvider>
            <NavBar SearchTerm={SearchTerm} setSearchTerm={setSearchTerm}/>
            <Routes>
                <Route path="/" element={<HomePage SearchTerm={SearchTerm}/>} />
                <Route path="/course_info/:courseId" element={<CoursePage/>} />
            </Routes>
            <Footer/>
        </CoursesProvider>
    )
}