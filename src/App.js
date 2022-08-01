import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { MainApp } from './components/MainApp/MainApp';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main";
import Sabaq from "./Sabaq/sabaq.jsx";
import First from "./First/first.jsx";
import Lesson from "./Lesson/lesson.jsx";
import Material from "./Material/material.jsx";
import Task from "./Task/task.jsx";
import Leader from "./Leader/leader.jsx";
import Task1 from "./Task/task1"
import client from "../src/client/Pa"

const App = () => { 

  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<MainApp />} />
        <Route path="/Main" element={<Main />} />
        <Route path="/Sabaq" element={<Sabaq />} />
        <Route path="/First" element={<First />} />
        <Route path="/Lesson" element={<Lesson />} />
        <Route path="/Material" element={<Material />} />
        <Route path="/Task" element={<Task />} />
        <Route path="/Leader" element={<Leader />} />
        <Route path="/Task1" element={<Task1 />} />
        <Route path="/client" element={<client />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
