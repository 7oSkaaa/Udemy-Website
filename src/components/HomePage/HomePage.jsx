import React from 'react'
import Section from './Section';
import Categories from './Categories';

export default function HomePage({SearchTerm}) {

    return (
        <>
            <Section SearchTerm={SearchTerm}/>
            <Categories/>
        </>
    )
}