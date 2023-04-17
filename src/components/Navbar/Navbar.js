import './Navbar.scss'
import logo from '../../assets/imgs/logo.png'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { LoginContext } from '../../context/LoginContext'

export const Navbar = ({red}) => {
    const { user, logout } = useContext(LoginContext)

    return (
        <header className="header" style={{backgroundColor: red ? 'red' : 'darkcyan'}}>
            <div className="header__container">
                <img src={logo} className="header__logo" alt='logo'/>

                <nav className="navbar">
                    <Link to='/' className="navbar__link">Inicio</Link>
                    <Link to='/productos/rojo' className="navbar__link">Rojo</Link>
                    <Link to='/productos/dorado' className="navbar__link">Dorado</Link>
                    <Link to='/productos/negro' className="navbar__link">Negro</Link>
                    <Link to='/productos/blanco' className="navbar__link">Blanco</Link>
                    <Link to='/productos/azul' className="navbar__link">Azul</Link>
                    <Link to='/nosotros' className="navbar__link">Nosotros</Link> 
                </nav>

                <CartWidget />
            </div>
            <div className='user'>
                <h6 className='user__in'> Bienvenido: {user.email}</h6>
                <button className='btn btn-danger' onClick={logout}>Cerrar sesion</button>
            </div>
        </header>
    )
}