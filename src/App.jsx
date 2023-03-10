import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './app.scss'
import Header from './components/header/Header';
import Inicio from './components/inicio/Inicio';
import Primero from './components/primero/Primero';
import Formulario from './components/formulario/Formulario';
import Footer from './components/footer/Footer';
import Idea from './components/idea/Idea';

const App = ()=>{

  return (
    <div className="App">
      <Header/>
      <Inicio/>
      <Primero/>
      <Idea/>
      <Formulario/>
      <Footer/>
      
    </div>
  )
}

export default App
