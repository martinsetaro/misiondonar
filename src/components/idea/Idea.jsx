import '../idea/idea.scss'
import comedor from '../../assets/img/comedor.jpg'
import escuelas from '../../assets/img/escuelas.png'
import ropa from '../../assets/img/ropa.jpg'

const Idea = () => {
  return (
    <div className="contenedorIdeas">
       <h2>¡Con tu ayuda podemos llegar a muchos más!</h2>
       <p>Nos encargamos de llevar aquellas personas que tienen más necesidad. Hoy en día hay
        muchos comedores, personas que necesitan cosas esenciales, y desde <span>Mision Donar</span>, Ponemos a disposición nuestro granito de arena y movilizamos las cosas que puedas tener guardadas y que ya no vas a usar más, entonces nosotros nos encargamos de encontrar a alguien que realmente puede necesitarlo.
       </p>
       <p>Desde colchones, frazadas, toallas, calzado y muchas cosas más, podemos entre todos lograr llevar la ayuda necesaria y brindar una mejor calidad de vida aquellos que más lo necesitan.</p>
       <p>Nos encargamos también de reparar si es necesario tu donación y que pueda seguir teniendo su uso.</p>
       <div className='contenedorImagenes'>
        <img src={escuelas} alt="img"/>
        <img src={ropa} alt="img"/>
        <img src={comedor} alt="img"/>
       </div>
    </div>
  )
}

export default Idea