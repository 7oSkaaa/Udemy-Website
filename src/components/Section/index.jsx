import React from "react";
import CoursesContent from './Courses_Section';
import HeaderSection from "./Header";
import Loader from "../Loading";
import './Section.css';

export default function Section({SearchTerm}) {
    
    const [data_is_fetched, set_data_is_fetched] = React.useState(false);
    const [courses_db, set_courses_db] = React.useState({});

    React.useEffect(() => {
        fetch("https://api.jsonbin.io/v3/b/631509f65c146d63ca8e86e4")
            .then((res) => res.json())
            .then((res) => {
                set_courses_db(res.record);
                set_data_is_fetched(true);
            });
    }, []);

    const {header, description, category, courses} = courses_db;

    return (
        <section>
            <HeaderSection /> 
            {
                data_is_fetched ?  <CoursesContent header={header} description={description} category={category} courses={courses} SearchTerm={SearchTerm}/> : <Loader/>
            }
        </section>
    );
}