import React from 'react'
import Item from './Item'

export default function ObjComp({objList}) {

    const objectives = objList.map((objItem, idx) => <Item key={idx} objItem={objItem} className="objectives"/>);
    
    return (
        <div>
            {objectives}
        </div>
    )
}