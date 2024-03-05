import kasalogo from '../assets/kasalogo.svg';


function Banner() {
    return (
        <div className='banner'>
            <img src={kasalogo} className="App-logo" alt="logo" />
            <nav className='banner_nav'>
                <a href='index.html'>Accueil</a>
                <a href='apropos.html'>A propos</a>
            </nav>
        </div>
    )
}

export default Banner