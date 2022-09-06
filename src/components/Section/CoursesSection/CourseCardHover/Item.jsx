import React from "react";

export default function Item ({objItem}){
    
    return (
        <div className="objective">
            <span className='material-symbols-outlined'>done</span>
            <span>{objItem}</span>
        </div>
    )
}