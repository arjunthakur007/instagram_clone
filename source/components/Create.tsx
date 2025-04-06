"use client";
import { title } from "process";
import React from "react";
import { useState } from "react";

const Create = () => {
 

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const post_data = () => {
    //localStorage
    localStorage.setItem("title", title)
    localStorage.setItem("description", description)
    localStorage.setItem("image", image)
    
    console.log({ title, description, image });
  };

  //e.target.value
  return (
    <div>
      <div className="">
        <input
          type="text"
          placeholder="Add title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="">
          <textarea
            name="description"
            placeholder="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <button onClick={(e) => post_data()}>Add post</button>
      </div>
    </div>
  );
};

export default Create;
