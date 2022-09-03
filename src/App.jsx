import React from 'react';
import './assets/App.css';
import NavBar from './components/Nav_Bar/NavBar.jsx';
import Section from './components/Section.jsx';
import Categories from './components/Categories/Categories';

function App() {
    
    return (
        <div>
            <NavBar />
            <Section />
            <Categories />
        </div>
    );
}

export default App;