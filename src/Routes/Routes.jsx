import React from 'react'
import HomePage from '../components/HomePage';
import { Routes, Route } from 'react-router-dom';
import CoursePage from '../components/CoursePage/CoursePage';

export default function RoutesPages() {
    return (
        <Routes>
            <Route path="/Udemy-Website/" element={<HomePage/>} />
            <Route path="/Udemy-Website/course_info/:courseTab/:courseIdx" element={<CoursePage/>} />
        </Routes>
    )
}