import React from "react";
import CoursesContent from './CoursesSection/CoursesContent';
import HeaderSection from "./Header/HeaderSection";
import Loader from "../Loader";
import './Section.css';

export default function Section({SearchTerm}) {
    
    const [data_is_fetched, set_data_is_fetched] = React.useState(false);
    const [courses_db, set_courses_db] = React.useState({});
    const curr_tab = 'python_res';

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
            set_courses_db(res['data'][curr_tab]);
            set_data_is_fetched(true); 
        })
        .catch((e) => { console.log(e.message) });
    }, []);

    const {header, description, title, items} = courses_db;

    return (
        <section>
            <HeaderSection/> 
            {
                data_is_fetched ?  <CoursesContent header={header} description={description} category={title} courses={items} SearchTerm={SearchTerm}/> : <Loader/>
            }
        </section>
    );
}