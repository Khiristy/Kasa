import logements from '../data/logements.json';


function Card() {
    console.log(logements);
    const title = logements[0].title
    return (
        <div className='Header'>
            <h1>{title}</h1>
            <nav className='Header_nav'>
                <a href='index.html'>Accueil</a>
                <a href='apropos.html'>A propos</a>
            </nav>
        </div>
    )
}

export default Card