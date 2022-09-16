import React from 'react';
import HomePage from './components/HomePage';
import { Routes, Route } from 'react-router-dom';
import CoursePage from './components/CoursePage/CoursePage';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { Provider } from './components/Context';

export default function App() {
        
    return (
        <Provider>
            <NavBar/>
            <Routes>
                <Route path="/udemy-home-page-React" element={<HomePage/>} />
                <Route path="/udemy-home-page-React/course_info/:courseTab/:courseIdx" element={<CoursePage/>} />
            </Routes>
            <Footer/>
        </Provider>
    )
}