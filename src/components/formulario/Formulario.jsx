import '../formulario/formulario.scss'
import departamentos from '../../db'

const Formulario = () => {



  return (
    <div className="contenedorFormulario">
        <h2>Formulario de contacto</h2>
        <p>Aqui podras ponerte en contacto con nosotros y decirnos que elemento puedes donar</p>
        <form className='formulario' name="contact" method="POST" data-netlify="true">
            <label>Ingresa tu nombre</label>
            <input type="text" placeholder="Ingrese su nombre" name="name"/>
            <label>Ingresa tu apellido</label>
            <input type="text" placeholder="Ingrese su apellido" name="name"/>
            <label>Ingresa tu telefono</label>
            <input type="number" placeholder="Ingrese su telefono"/>
            <label>Ingresa tu correo electronico</label>
            <input type="email" placeholder="Ingrese su email"/>
            <label>Selecciona tu departamento</label>
            <select name="role[]" multiple >
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