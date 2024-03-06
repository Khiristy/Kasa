import banners from '../data/banners.json';

function Banner () {

    const imgSrc = banners[0].src 
    const imgAlt = banners[0].alt
    const imgText = banners[0].text
console.log(process.env.PUBLIC_URL);
    return (
        <div className="banner">
            <img src={require({imgSrc}).default} alt="" />
            <h1>{imgText}</h1>
        </div>
    )
}

export default Banner