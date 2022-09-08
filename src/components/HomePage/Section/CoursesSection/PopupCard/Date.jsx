import React from "react";

export default function Data({date}){
    const Month = {
        '01': 'January',
        '02': 'February',
        '03': 'March',
        '04': 'April',
        '05': 'May',
        '06': 'June',
        '07': 'July',
        '08': 'August',
        '09': 'September',
        '10': 'October',
        '11': 'November',
        '12': 'December'
    }

    const [yy, mm] = date.split('-');

    return (
        <p className="last_update">
            Updated <b>{Month[mm]} {yy}</b>
        </p>
    )
}