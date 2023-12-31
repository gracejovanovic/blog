import React, { useState } from 'react';
import axios from 'axios';

const NewPost = ({ onSubmit, onCancel }) => {

  const [date, setDate] = useState(''); 
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');

  const handleImageUpload = e => {
    setImage(e.target.files[0]);
  }

  const instance = axios.create({
    baseURL: 'http://localhost:3001/' 
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('image', image);

    try {
      const res = await instance.post('/', formData);
      onSubmit({
        title,
        date,
        content,
        imageUrl: res.data.path  
      });
    } catch (err) {
      console.error(err.response.data);
    }
  }

  return (
    <form
      onSubmit={handleSubmit} encType="multipart/form-data">
      <input
        type="text" required
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="date" required
        placeholder="Date"
        onChange={(e) => setDate(e.target.value)}
      />
      <input
        type="text" required
        placeholder="A few notes"
        onChange={(e) => setContent(e.target.value)}
      />
      <input
        type="file" required
        placeholder="Add a pic"
        onChange={handleImageUpload}
        name="image"
        />
      <button type="submit">Create Post</button>
    </form>
  );
};

export default NewPost;
