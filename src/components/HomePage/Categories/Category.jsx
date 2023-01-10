import React from "react";
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.css';
import './Category.css';

export default function Category({category}) {

    return (
        <Col lg={3} md={4} sm={12} className={"card category-card m-auto rounded-0 border-0"}>
            <figure>
                <img className="card-img-top rounded-0 category-img zoom w-80" src={category.img} alt={`Card cap ${category}`} />
            </figure>
            <figcaption>
                <h6 className="card-title mb-5"><strong>{category.name}</strong></h6>
            </figcaption>
        </Col>
    )
}