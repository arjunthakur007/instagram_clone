"use client"
import React from 'react'

const Create = () => {

    const addpost = [
        {
            title: <input type="text" placeholder='Add title' />,
            description: <textarea name="" id=""></textarea>,
            image: <input type="file" accept='image/png, image/jpg, image/jpeg, image/gif, image/mp4'/>,
        }]

  return (
    
    {addpost.map((i) => (
    <div>
       {i.title}
       {i.description}
       {i.image}
    </div>
) )}
  )
}

export default Create