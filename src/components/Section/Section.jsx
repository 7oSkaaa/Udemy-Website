import React from "react";
import CoursesContent from './Courses_Section/Courses_Content';
import HeaderSection from "./Header/HeaderSection";
import Loader from "../Loader";
import './Section.css';

export default function Section({SearchTerm}) {
    
    const [data_is_fetched, set_data_is_fetched] = React.useState(false);
    const [courses_db, set_courses_db] = React.useState({});

    const fetchData = async () => {
        const response = await fetch('https://api.jsonbin.io/v3/b/631509f65c146d63ca8e86e4');
        if (!response.ok)
            throw new Error("Courses data couldn't be fetched!");
        else 
            return response.json();
    };

    React.useEffect(() => {
        fetchData()
        .then((res) => { 
            set_courses_db(res.record);
            set_data_is_fetched(true); 
        })
        .catch((e) => { console.log(e.message) });
    }, []);

    const {header, description, category, courses} = courses_db;

    return (
        <section>
            <HeaderSection/> 
            {
                data_is_fetched ?  <CoursesContent header={header} description={description} category={category} courses={courses} SearchTerm={SearchTerm}/> : <Loader/>
            }
        </section>
    );
}