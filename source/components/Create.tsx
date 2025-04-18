"use client";
import React, { useState } from "react";

const Create = () => {
  const [card_data, setCard_Data] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const post_data = () => { //triggred when add post button is clicked
    const newCard = {
      title: title,
      description: description,
      image: image,
    };

    // we created a function for the setCard_Data so it can update the "card" state
    setCard_Data((prevCards) => [...prevCards, newCard]); //(...) are 

    // Store the updated card_data in localStorage
    localStorage.setItem("card", JSON.stringify([...card_data, newCard]));

    // Clear input fields after adding
    setTitle("");
    setDescription("");
    setImage("");

    console.log(newCard);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Add title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div>
          <textarea
            name="description"
            placeholder="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <button onClick={post_data}>Add post</button>
      </div>
    </div>
  );
};

export default Create;
