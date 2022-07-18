import './Navbar.scss';
import Hero from '../Hero/Hero';
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {
    return (
        <header>
            <nav className="navbar">
                <div className='container'>
                    <div className='navbar__left'> 
                        <button className='navbar__toggle'><i className="fa-solid fa-bars"></i></button>
                        <ul className="navbar__menu">
                            <li>Home</li>
                            <li>Products</li>
                        </ul>
                    </div>
                    <div className="navbar__brand">
                        <img src="/assets/images/navbar-logo.png" alt="The Vintage Collection"/>
                    </div>
                    <div className="navbar__right">
                        <ul className="navbar__menu">
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                        <div className='navbar__right--buttons'>
                            <button><i className="fa-solid fa-magnifying-glass"></i></button>
                            <CartWidget />
                        </div>
                    </div>
                </div>
                <div className='overlay'></div>
                <div className='left-menu'>
                    <div className='container'></div>
                </div>
            </nav>
            <Hero />
        </header>
    );
}

export default Navbar;