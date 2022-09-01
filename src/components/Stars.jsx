import React from 'react';
import { MdStarOutline } from "react-icons/md";
import { MdStar } from "react-icons/md";
import { MdStarHalf } from "react-icons/md";

function EmptyStar(){
    return (
        <MdStarOutline></MdStarOutline> 
    );
}
    
function FullStar(){
    return (
        <MdStar></MdStar>
    );
}

function HalfStar(){
    return (
        <MdStarHalf></MdStarHalf>
    );
}

export default function Stars({rating}){
    let stars = [];
    let stars_cnt = 5;
    for(let i = 0; i < Math.floor(rating); i++, stars_cnt--)
        stars.push(<FullStar key={i} />);
    if(Math.floor(rating) !== Math.round(rating)){
        stars.push(<HalfStar />); 
        stars_cnt--;
    }
    for(let i = 0; i < stars_cnt; i++)
        stars.push(<EmptyStar />);
    return (
        <div className="stars">
            {stars}
        </div>
    );
}