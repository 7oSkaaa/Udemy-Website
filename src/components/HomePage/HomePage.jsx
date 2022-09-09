import React from 'react'
import Section from './Section';
import Categories from './Categories';
import { CoursesProvider } from '../CoursesContext';

export default function HomePage({SearchTerm}) {

    return (
        <CoursesProvider>
            <Section SearchTerm={SearchTerm}/>
            <Categories/>
        </CoursesProvider>
    )
}