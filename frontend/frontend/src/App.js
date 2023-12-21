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
      <div className="sidebar">
        <Sidebarr />
        </div>
      <div className="App">      
        <div className="App-content">
          {/* <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/inventario">Inventario</Link>
              </li>
            </ul>
          </nav> */}
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
