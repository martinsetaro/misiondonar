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
               <p>Si tenes algo que ya no uses , que este guardado y que no sabes que hacer, alguien puede necesitarlo</p>
            </div>
            <div className='cardInfo'>
               <img src={camioneta} alt="camioneta"/>
               <p>Nos encargamos sin cargo de retirar lo que tengas para donar.</p>
            </div>
            <div className='cardInfo'>
               <img src={reparar} alt="reparar"/>
               <p>Si tenes algo que necesita se reparado, pero que ya no le vas a dar uso, tambien sirve.</p>
            </div>
            <div className='cardInfo'>
               <img src={mapa} alt="mapa"/>
               <p>Si te encontras a más de 100km tambíen podemos ir a buscarlos, agendamos un dia y lo vamos a buscar.</p>
            </div>
        </div>
    </div>
  )
}

export default Primero