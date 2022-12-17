import React,{ useState } from 'react';
import '../formulario/formulario.scss'
import departamentos from '../../db'
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

const Formulario = () => {



    const [nombre,setNombre] = useState('');
    const [apellido,setApellido] = useState('');
    const [telefono,setTelefono] = useState('');
    const [correoElectronico,setCorreoElectronico] = useState('');
    const [mensaje,setMensaje] = useState('');
    const [departamento,setDepartamento]= useState('');




const enviarDatos = (e)=>{
     e.preventDefault();
    if([nombre,apellido,telefono,correoElectronico,mensaje].includes('')){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No pueden existir campos vacios!',
            footer: '<h4>Revise los datos</h4>'
          })
    }else {
        sendEmail(e);
    }

}


    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('misiondonarmendoza', 'template_kamhvpd',e.target, '4W4b1H25foGr5EXxd')
          .then((result) => {
              if(result.status == 200){
                Swal.fire({
                    imageUrl: 'https://i.ibb.co/fD9Kj14/Muchas-Gracias.png',
                    imageWidth: 400,
                    imageHeight: 200,
                    imageAlt: 'Custom image',
                  })
                  setTimeout(() => {
                   window.location.reload(); 
                  },3000);
                  
              }
          }, (error) => {
              console.log(error);
          });
      };

  

  return (
    <div className="contenedorFormulario">
        <h2>Formulario de contacto</h2>
        <p>Aquí podrás ponerte en contacto con nosotros , si quieres donar o de alguien que necesite.</p>
        <form className='formulario' onSubmit={enviarDatos}>
            <label>Ingresa tu nombre</label>
            <input onChange={(e)=> setNombre(e.target.value)} type="text" placeholder="Ingrese su nombre" name="user_name"/>
            <label>Ingresa tu apellido</label>
            <input onChange={(e)=> setApellido(e.target.value)} type="text" placeholder="Ingrese su apellido" name="user_apellido"/>
            <label>Ingresa tu telefono</label>
            <input  onChange={(e)=> setTelefono(e.target.value)}type="number" placeholder="Ingrese su telefono" name="user_phone"/>
            <label>Ingresa tu correo electronico</label>
            <input onChange={(e)=> setCorreoElectronico(e.target.value)} type="email" placeholder="Ingrese su email" name="user_email"/>
            <label>Selecciona tu departamento</label>
            <select onChange={(e)=> setDepartamento(e.target.value)} name={departamento} >
                <option>Seleccionar Depto</option>
                {departamentos.map((item,index) => {
                    return (
                        <option key={index} value={item}>{item}</option>
                    )
                })}
            </select>
            <label>Contanos que vas a donar:</label>
            <textarea name="message" onChange={(e)=> setMensaje(e.target.value)}>

            </textarea>
            <button type='submit' className='btnFormulario'>Enviar</button>
            <button type="reset" className='btnFormulario'>Reset</button>


        </form>

    </div>
  )
}

export default Formulario