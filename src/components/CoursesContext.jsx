import React, { useState } from "react"
import { createContext, useEffect } from "react"

export const CoursesContext = createContext({});

export const CoursesProvider = (props) => {

    const {children} = props;
    const [coursesList, setCoursesList] = useState();
    const [topCategories, setTopCategories] = useState();
    const [currTab, setCurrTab] = useState("python_res");
    const [searchTerm, setSearchTerm] = useState('');
    const ScreenDimensions = {
        Mobile: {
            maxWidth: 464,
            minWidth: 0,
            coverHeight: 800,
            CardHeight: 4200
        },
        Tablet: {
            maxWidth: 1024,
            minWidth: 464,
            coverHeight: 900,
            CardHeight: 4000
        },
        Desktop: {
            maxWidth: 1440,
            minWidth: 1024,
            coverHeight: 1000,
            CardHeight: 2500
        },
        Large_Desktop: {
            maxWidth: 3000,
            minWidth: 1440,
            coverHeight: 400,
            CardHeight: 2500
        }
    }

    useEffect(() => {

        fetch("https://myjson.dit.upm.es/api/bins/9i2i")
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
    
    const queryCourse = (courseTab, courseId) => {

        if(coursesList === undefined) {
            fetch("https://myjson.dit.upm.es/api/bins/9i2i")
            .then((res) => res.json())
            .then((res) => {
                setCoursesList(res.data);
            });
            return null;
        }

        const courses = coursesList[courseTab].items;

        for(let course of courses)
            if(course.id === courseId)
                return course;
        
    }

    const coursesContext = {
        coursesList,
        topCategories,
        currTab,
        searchTerm,
        ScreenDimensions,
        queryCourse,
        setCurrTab,
        setSearchTerm,
    };
    
    return <CoursesContext.Provider value={coursesContext}>{children}</CoursesContext.Provider>;
}