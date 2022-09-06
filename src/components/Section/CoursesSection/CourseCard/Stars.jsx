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
    while(stars_cnt--){
        if(Math.floor(rating) >= 1)
           stars.push(<FullStar key={stars_cnt} />);
        else if(Math.round(rating) === 1)
            stars.push(<HalfStar key={stars_cnt} />);
        else
            stars.push(<EmptyStar key={stars_cnt} />);
        rating--;
    }
    return (
        <div className="stars">
            {stars}
        </div>
    );
}