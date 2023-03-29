import './Navbar.scss'
import logo from '../../assets/imgs/logo.png'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'


export const Navbar = () => {

    return (
        <header className="header">
            <div className="header__container">
                <img src={logo} className="header__logo" alt='logo'/>

                <nav className="navbar">
                <Link to='/' className="navbar__link">Inicio</Link>
                    <Link to='nosotros' className="navbar__link">Nosotros</Link>
                    <Link to='/pokeapi' className="navbar__link">PokeApi</Link>
                    
                </nav>

                <CartWidget />
            </div>
        </header>
    )
}