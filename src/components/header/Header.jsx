import logo from '../../assets/img/misionlogo.png';
import '../header/header.scss'

const Header = () => {



  return (
    <div className="header">
      <img src={logo} alt="logo mision"/>
      <h2>Con poco estás haciendo mucho , alguien te regala una sonrisa!</h2>
    </div>
  )
}

export default Header