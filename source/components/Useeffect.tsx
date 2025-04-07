"use client"
import React, { useEffect, useState } from 'react'

const Useeffect = () => {

    const [number, setNumber] = useState(0)
    const [title, setTitle] = useState("")
    useEffect(() => {
    if (number>0) {
        setTitle("hey")  
    }
    }, [number])
    
  return (
    <div>
        <button type="button"onClick={() => setNumber (number+1)}>incriment</button>
        <button type="button"onClick={() => setNumber (number-1) }>decriment</button>
        <h1>{title}</h1>
    </div>
  )
}

export default Useeffect