import React from "react";
import './Tabs.css';

export default function Tabs({curr_tab, set_curr_tab}) {

    const onChange = (event) => {
        const tab_id = event.target.id;
        set_curr_tab(`${tab_id}_res`);
    }

    return (
        <div className="courses-categories">
            <form className="courses-tab">
                <input onChange={onChange} id="python" type="radio" name="courses-tab" defaultChecked={true}/>
                <label htmlFor="python" id="python_label">Python</label>
                <input onChange={onChange} id="excel" type="radio" name="courses-tab" />
                <label htmlFor="excel" id="excel_label">Excel</label>
                <input onChange={onChange} id="web" type="radio" name="courses-tab" />
                <label htmlFor="web" id="web_label">Web Development</label>
                <input onChange={onChange} id="js" type="radio" name="courses-tab" />
                <label htmlFor="js" id="js_label">Java Script</label>
                <input onChange={onChange} id="data" type="radio" name="courses-tab" />
                <label htmlFor="data" id="data_label">Data Science</label>
                <input onChange={onChange} id="aws" type="radio" name="courses-tab" />
                <label htmlFor="aws" id="aws_label">AWS Certification</label>
                <input onChange={onChange} id="draw" type="radio" name="courses-tab" />
                <label htmlFor="draw" id="draw_label">Drawing</label>	
            </form>
        </div>
    )

}