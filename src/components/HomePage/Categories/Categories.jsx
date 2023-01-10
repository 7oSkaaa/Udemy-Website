import React from "react";
import CategoriesSections from "./CategoriesSections";
import Loader from "../Loader";
import { Context } from "../../Context";
import './Category.css';
import 'bootstrap/dist/css/bootstrap.css';

export default function Categories() {

    const { topCategories } = React.useContext(Context);

    return topCategories ? <CategoriesSections categoryList={topCategories} className='categories_sections'/> : <Loader/>;
}