import kasalogo from '../assets/kasalogo.svg';


function Header() {
    return (
        <div className='Header'>
            <img src={kasalogo} className="App-logo" alt="logo" />
            <nav className='Header_nav'>
                <a href='index.html'>Accueil</a>
                <a href='apropos.html'>A propos</a>
            </nav>
        </div>
    )
}

export default Header