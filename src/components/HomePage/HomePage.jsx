import React from 'react'
import NavBar from './NavBar';
import Section from './Section';
import Categories from './Categories';
import Footer from './Footer';
import { CoursesProvider } from '../CoursesContext';

export default function HomePage() {

    const [SearchTerm, setSearchTerm] = React.useState('');
    
    return (
        <CoursesProvider>
            <NavBar SearchTerm={SearchTerm} setSearchTerm={setSearchTerm}/>
            <Section SearchTerm={SearchTerm}/>
            <Categories/>
            <Footer/>
        </CoursesProvider>
    )
}