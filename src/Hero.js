import React from 'react'
import { FaTimes } from 'react-icons/fa'

export default function Hero({ hero, onDelete }) {
    return (
        <div>
            <h3>{hero.name} <FaTimes style={{ color: 'blue', cursor: 'pointer' }} onClick={() => onDelete(hero.name)} /></h3>
            <p>{hero.text} </p>
        </div>
    )
}
