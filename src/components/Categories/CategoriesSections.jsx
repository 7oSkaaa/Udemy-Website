import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export default function CategoriesSections({categoryList}) {
    return (
        <Container fluid className="{mt-3}">
            <h4 className={"mb-5 mt-5"}><strong>Top categories</strong></h4>
            <Row className={"p-0 justify-content-center"}>
                {categoryList}
            </Row>
        </Container>
    );
}