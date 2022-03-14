
import './App.css';
//import { Navbar, Nav, Container} from 'react-bootstrap';
//import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Contacto from './pages/Contacto'
import Datos from './pages/Datos'
import DatosExt from './pages/DatosExt'
import Navbar from './Navbar/Navbar'
import React from "react";


function App() {

  const cookieStorage = {
    getItem: (key) => {
      const cookies = document.cookie
      .split(';')
      .map(cookie => cookie.split('='))
      .reduce((acc, [key, value]) => ({...acc, [key.trim()]: value}), {});
      return cookies[key];
    },
    setItem: (key, value) => {
      document.cookie = `${key}=${value}`
    },
  };

  const storageType = cookieStorage;
  const consentPropertyName = "jdc_consent";

  const shouldShowPopup = () => !storageType.getItem(consentPropertyName);
  const saveToStorage = () => storageType.setItem(consentPropertyName, true);

  window.onload = () => {

    const consentPopup = document.getElementById('consent-popup');
    const acceptBtn = document.getElementById('accept');

    const acceptFn = event => {
      saveToStorage(storageType);
      consentPopup.classList.add('hidden');
    }

    acceptBtn.addEventListener('click', acceptFn);

    if(shouldShowPopup(storageType)){
      /*const consent = confirm('¿Está de acuerdo con los términos y condiciones de la web?');
      if(consent){
        saveToStorage();
      }*/
      setTimeout(() => {
        consentPopup.classList.remove('hidden');
      }, 2000);
      
    }
  }
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contacto' element={<Contacto/>} />
          <Route path='/datos' element={<Datos/>} />
          <Route path='/datosExt' element={<DatosExt/>} />
        </Routes>
      </Router>

      <div id="consent-popup" class="hidden">
        <p>Usando este sitio aceptas nuestros <a href='#'> Términos y Condiciones</a>.
          Por favor <a id="accept" href='#'>Acepte</a> esto antes de usar nuestro sitio. 
        </p>     
      </div>

      <header className="App-header">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>      
        <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
      </header>
      
    </div>
    
  );
}

export default App;
