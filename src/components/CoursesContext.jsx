import React, {useState} from "react"
import { createContext, useEffect } from "react"

export const CoursesContext = createContext({});

export const CoursesProvider = (props) => {

    const {children} = props;
    const [coursesDb, setCoursesDb] = useState({});
    const [coursesList, setCoursesList] = useState();
    const [topCategories, setTopCategories] = useState();

    useEffect(()=>{

        fetch("https://api.npoint.io/97d7e0d71e507947a59f")
            .then((res) => res.json())
            .then((res) => {
                setCoursesList(res.data);
            });    
    
        fetch("https://api.npoint.io/5d666b620e2b069620a2")
            .then((res) => res.json())
            .then((res) => {
                setTopCategories(res);
            });
    }, []);
    
    const queryCourse = (courseId) => {

        if(courseId in coursesDb){
            if(coursesDb[courseId].fetching){
                return null;
            }
            else{
                return coursesDb[courseId];
            }
        }
        else{

            setCoursesDb((old) => ({
                ...old,
                [courseId]: {"fetching": true}
            }));

            fetch("https://api.npoint.io/c6f4ed954b5aad734f00")
                .then(res => res.json())
                .then(res => fetch(`https://api.npoint.io/${res[courseId]}`))
                .then(res => res.json())
                .then(res => {
                    setCoursesDb(old => ({
                        ...old, 
                        [courseId] : {...res, 
                            "fetching": false
                        }
                    }));
                })

            return null;
        }
    }

    const coursesContext = {
        coursesDb,
        coursesList,
        topCategories,
        queryCourse
    };

    return <CoursesContext.Provider value={coursesContext}>{children}</CoursesContext.Provider>;
}