import React from "react";
import CoursesContent from './CoursesSection/CoursesContent';
import HeaderSection from "./Header/HeaderSection";
import Loader from "../Loader";
import './Section.css';
import Tabs from './CoursesSection/Tabs';

export default function Section({SearchTerm}) {
    
    const [data_is_fetched, set_data_is_fetched] = React.useState(false);
    const [courses_db, set_courses_db] = React.useState({});
    const [curr_tab, set_curr_tab] = React.useState('python_res');

    const fetchData = async () => {
        const response = await fetch('https://api.npoint.io/97d7e0d71e507947a59f');
        if (!response.ok)
            throw new Error("Courses data couldn't be fetched!");
        else 
            return response.json();
    };

    React.useEffect(() => {
        fetchData()
        .then((res) => { 
            set_courses_db(res['data']);
            set_data_is_fetched(true); 
        })
        .catch((e) => { console.log(e.message) });
    }, []);

    const tab = courses_db[curr_tab];

    return (
        <section>
            <HeaderSection/> 
            <Tabs curr_tab={curr_tab} set_curr_tab={set_curr_tab}/>
            {
                data_is_fetched ?  <CoursesContent tab={tab} SearchTerm={SearchTerm}/> : <Loader/>
            }
        </section>
    );
}