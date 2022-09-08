import React from "react";
import Category from "./Category.jsx";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './Category.css';

export default function CategoriesSections({categoryList}) {

    categoryList = Object.keys(categoryList).map((category, idx) => <Category key={idx} category = {categoryList[category]}/>)    

    return (
        <Container fluid className="{mt-3} categories_sections">
            <h4 className={"mb-5 mt-5"}><strong>Top categories</strong></h4>
            <Row className={"p-0 justify-content-center"}>
                {categoryList}
            </Row>
        </Container>
    );
}