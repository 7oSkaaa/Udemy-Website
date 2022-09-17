import React, { useState, useRef } from "react"
import { createContext, useEffect } from "react"

export const Context = createContext({});

export const Provider = (props) => {

    const {children} = props;
    const [coursesList, setCoursesList] = useState();
    const [topCategories, setTopCategories] = useState();
    const [currTab, setCurrTab] = useState("python_res");
    const [searchTerm, setSearchTerm] = useState('');
    const [YLimit, setYLimit] = useState(0);
    const YRef = useRef(null);
    const Categories = {
        "python_res": "Python",
        "javascript_res": "JavaScript",
        "data_res": "Data Science",
        "web_res": "Web Development",
        "aws_res": "AWS",
        "excel_res": "Excel",
        "draw_res": "Drawing"
    }
    const ScreenDimensions = {
        Mobile: {
            maxWidth: 464,
            minWidth: 0,
            coverHeight: 800,
        },
        Tablet: {
            maxWidth: 1024,
            minWidth: 464,
            coverHeight: 900,
        },
        Desktop: {
            maxWidth: 1440,
            minWidth: 1024,
            coverHeight: 1000,
        },
        Large_Desktop: {
            maxWidth: 3000,
            minWidth: 1440,
            coverHeight: 400,
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
        YRef,
        YLimit,
        Categories,
        queryCourse,
        setCurrTab,
        setSearchTerm,
        setYLimit
    };
    
    return <Context.Provider value={coursesContext}>{children}</Context.Provider>;
}