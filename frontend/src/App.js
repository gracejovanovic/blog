import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import PostDetail from './components/PostDetail';
import Main from './pages/Main';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main/>} />
      <Route path="/:postId" element={<PostDetail />} />
    </Routes>
    );
  };
  
export default App;
