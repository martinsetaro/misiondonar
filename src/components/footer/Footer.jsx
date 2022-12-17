import donacion from '../../assets/img/donacion.png'
import '../footer/footer.scss'

const Footer = () => {
  return (
    <div className='contenedorFooter'>
        <div className='infoFooter'>
            <img src={donacion} alt="donacion"/> 
        </div>
       <div className='infoFooter-parrafo'>
        <p>Whatsapp : 261 2572051</p>
        <p>Email: misiondonarmendoza@gmail.com</p>
       </div>
        <div className='infoFooter'>
          <p>Godoy Cruz - Mendoza</p> 
          <p>2022 &copy;</p>  
        </div>
        

    </div>
  )
}

export default Footer