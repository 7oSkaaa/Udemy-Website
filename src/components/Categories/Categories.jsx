import React from "react";
import Category from "./Category";
import CategoriesSections from "./CategoriesSections";
import Loader from "../Loader/";
import 'bootstrap/dist/css/bootstrap.css';

export default function Categories() {

    const [categories_db, set_categories_db] = React.useState({Categories : []});
    const [is_data_fetched, set_is_data_fetched] = React.useState(false);

    const fetchData = async () => {
        const response = await fetch('https://api.jsonbin.io/v3/b/6315ceb0a1610e63861ef64c');
        if (!response.ok)
            throw new Error("Categories data couldn't be fetched!");
        else
            return response.json();
    };

    React.useEffect(() => {
        fetchData()
        .then((res) => { 
            set_is_data_fetched(true);
            set_categories_db(res.record) 
        })
        .catch((e) => { console.log(e.message) });
    }, []);

    const { Categories } = categories_db;
    const categoryList = Categories.map((category, idx) => <Category key={idx} category = {category}/>);

    return (
        <section>
            { is_data_fetched ? <CategoriesSections categoryList={categoryList}/> : <Loader/> }
        </section>
    )

}