import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Section from './components/Section';
import Categories from './components/Categories';
import Footer from './components/Footer';

function App() {
    
    const [SearchTerm, setSearchTerm] = React.useState('');

    return (
        <div>
            <NavBar SearchTerm={SearchTerm} setSearchTerm={setSearchTerm}/>
            <Section SearchTerm={SearchTerm}/>
            <Categories/>
            <Footer/>
        </div>
    );
}

export default App;