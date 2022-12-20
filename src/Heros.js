import Hero from './Hero';
import React from "react"

const Heros = ({ heros, onDelete }) => {
  return (
    <>
      {heros.map((hero) => (
        <Hero key={hero.id} hero={hero} onDelete={onDelete} />
      ))}
    </>
  )
}

export default Heros