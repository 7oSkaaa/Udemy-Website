import React from "react";
import Category from "./Category";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.css';

export default function Categories() {

    const categories = ['Design', 'Development', 'Marketing', 'IT and Software', 'Personal Development', 'Business', 'Photography', 'Music'];
    const categoryList = categories.map((category, idx) => <Category key={idx} category = {category}/>);

    return (
        <section>
            <Container fluid className="{mt-3}">
                <h4 className={"mb-5 mt-5"}><strong>Top categories</strong></h4>
                <Row className={"p-0 justify-content-center"}>
                    {categoryList}
                </Row>
            </Container>
        </section>
    )

}