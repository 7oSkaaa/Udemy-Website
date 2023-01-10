import React from 'react'
import HomePage from '../components/HomePage';
import { Routes, Route } from 'react-router-dom';
import CoursePage from '../components/CoursePage/CoursePage';

export default function RoutesPages() {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/course_info/:courseTab/:courseIdx" element={<CoursePage/>} />
        </Routes>
    )
}