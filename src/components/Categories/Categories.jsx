import React from "react";
import Category from "./Category";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.css';

export default function Categories() {

    const [categories_db, set_categories_db] = React.useState({Categories : []});

    const fetchData = async () => {
        const response = await fetch('https://api.jsonbin.io/v3/b/6315ceb0a1610e63861ef64c');
        if (!response.ok)
            throw new Error("Categories data couldn't be fetched!");
        else
            return response.json();
    };

    React.useEffect(() => {
        fetchData()
        .then((res) => { set_categories_db(res.record) })
        .catch((e) => { console.log(e.message) });
    }, []);

    const { Categories } = categories_db;
    const categoryList = Categories.map((category, idx) => <Category key={idx} category = {category}/>);

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