import './Navbar.scss';
import Hero from '../Hero/Hero';

const Navbar = () => {
    return (
        <header>
            <nav className="navbar">
                <div className='container'>
                    <div className='navbar__left'> 
                        <button className='navbar__toggle'><i class="fa-solid fa-bars"></i></button>
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
                            <button><i class="fa-solid fa-magnifying-glass"></i></button>
                            <button><i class="fa-solid fa-cart-shopping"></i></button>
                        </div>
                    </div>
                </div>
            </nav>
            <Hero />
        </header>
    );
}

export default Navbar;