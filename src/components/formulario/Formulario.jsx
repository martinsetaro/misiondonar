import '../formulario/formulario.scss'
import departamentos from '../../db'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Formulario = () => {

    const sendEmail = (e) => {
        e.preventDefault();
        const form = useRef();
    
        emailjs.sendForm('misiondonarmendoza', 'template_kamhvpd', form.current, 'nF0V99lOO5mXCUZlZY')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };


  return (
    <div className="contenedorFormulario">
        <h2>Formulario de contacto</h2>
        <p>Aqui podras ponerte en contacto con nosotros y decirnos que elemento puedes donar</p>
        <form className='formulario' ref={form} onSubmit={sendEmail}>
            <label>Ingresa tu nombre</label>
            <input type="text" placeholder="Ingrese su nombre" name="user_name"/>
            <label>Ingresa tu apellido</label>
            <input type="text" placeholder="Ingrese su apellido"/>
            <label>Ingresa tu telefono</label>
            <input type="number" placeholder="Ingrese su telefono" name="phone"/>
            <label>Ingresa tu correo electronico</label>
            <input type="email" placeholder="Ingrese su email" name="user_email"/>
            <label>Selecciona tu departamento</label>
            <select >
                <option>Seleccionar Depto</option>
                {departamentos.map((item,index) => {
                    return (
                        <option key={index}>{item}</option>
                    )
                })}
            </select>
            <label>Contanos que vas a donar:</label>
            <textarea name="message">

            </textarea>
            <input type="submit" value="enviar" className='btnFormulario'/>
            <input type="reset" value="Reset" className='btnFormulario' />


        </form>

    </div>
  )
}

export default Formulario