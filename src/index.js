import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main";
import Sabaq from "./Sabaq/sabaq.jsx";
import First from "./First/first.jsx";
import Lesson from "./Lesson/lesson.jsx";
import Material from "./Material/material.jsx";
// import Music from "./Music";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" index element={<App />} />
      <Route path="/Main" element={<Main />} />
      <Route path="/Sabaq" element={<Sabaq />} />
      <Route path="/First" element={<First />} />
      <Route path="/Lesson" element={<Lesson />} />
      <Route path="/Material" element={<Material />} />
      {/* <Route path="/Music" element={<Music />} /> */}
    </Routes>
  </BrowserRouter>
  </React.StrictMode>
);

