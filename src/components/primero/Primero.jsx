import '../primero/primero.scss'
import embalaje from '../../assets/img/embalaje.png'
import camioneta from '../../assets/img/camioneta.png'
import reparar from '../../assets/img/reparar.png'
import mapa from '../../assets/img/mapa.png'

const Primero = () => {
  return (
    <div className="contenedorPrimero">
        <h2>¿Que es donar?</h2>
        <p>Liberalidad de alguien que transmite gratuitamente algo que le pertenece a favor de otra persona que lo acepta</p>
        <div className='contenedorInfo'>
            <div className='cardInfo'>
               <img src={embalaje} alt="embalaje"/>
               <p>Si tenés algo que ya no uses, que esté guardado y que no sabes que hacer, alguien puede necesitarlo</p>
            </div>
            <div className='cardInfo'>
               <img src={camioneta} alt="camioneta"/>
               <p>Nos encargamos sin cargo de retirar lo que tengas para donar.</p>
            </div>
            <div className='cardInfo'>
               <img src={reparar} alt="reparar"/>
               <p>¡Si tenés algo que este roto que todavía puede ser reparado, también sirve para tu donación!.</p>
            </div>
            <div className='cardInfo'>
               <img src={mapa} alt="mapa"/>
               <p>Si te encuentras a más de 100 km también podemos ir a buscarlos, agendamos un día y lo vamos a buscar.</p>
            </div>
        </div>
    </div>
  )
}

export default Primero