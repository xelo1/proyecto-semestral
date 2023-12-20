import React from 'react';
import logo from './logo.svg';
import './App.css';
import Inventario from './scenes/materiales/material_crud';
import MaterialCrear from './scenes/materiales/material_crear';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';

function Home() {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to Your App</h1>
      </header>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/inventario">Inventario</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inventario" element={<Inventario />} />
          <Route path="/crear_inventario" element={<MaterialCrear />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
