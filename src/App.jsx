import React from 'react';
import './App.css';
import NavBar from './components/NavBar/index';
import Section from './components/Section/index';
import Categories from './components/Categories/index';

function App() {
    
    const [SearchTerm, setSearchTerm] = React.useState('');

    return (
        <div>
            <NavBar SearchTerm={SearchTerm} setSearchTerm={setSearchTerm}/>
            <Section SearchTerm={SearchTerm} key={'coursesKey'}/>
            <Categories key={'categoryKey'}/>
        </div>
    );
}

export default App;