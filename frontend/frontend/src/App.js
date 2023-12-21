import React from 'react';
import logo from './logo.svg';
import './App.css';
import Inventario from './scenes/materiales/material_crud';
import MaterialCrear from './scenes/materiales/material_crear';
import Sidebarr from './global/sidebar';
import Home from './scenes/home';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="sidebar">
          <Sidebarr />
        </div>          
        <div className="content">
          <Routes>
          <Route path="/" element={<Home/>} />
            <Route path="/inventario" element={<Inventario />} />
            <Route path="/crear_inventario" element={<MaterialCrear />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </Router>
  ); 
}
export default App;
