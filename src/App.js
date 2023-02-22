import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Inicio from './views/Inicio';
import Servicios from './views/Servicios';
import Eventos from './views/Eventos';
import NavBar from './components/compartidos/Navbar';
import Contacto from './views/Contacto';
import Footer from './components/compartidos/Footer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <NavBar/>

        <Routes>
          <Route path="/" element={<Inicio/>} />
          <Route path="/servicios" element={<Servicios/>} />
          <Route path="/eventos" element={<Eventos/>} />
          <Route path="/contacto" element={<Contacto/>} />
        </Routes>

        <Footer/>

      </BrowserRouter>
      
    </div>
  );
}

export default App;