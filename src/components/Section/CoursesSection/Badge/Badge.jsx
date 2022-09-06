import React from 'react'
import './Badge.css'

export default function Badge({badge_text}) {
    return (
        <button className='_badge'>{badge_text}</button>
    )
}
