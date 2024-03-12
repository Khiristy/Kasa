

function Banner ({ image, texte }) {

    return (
        <div className="banner">
          <img className="banner_img" src={image} alt="Bannière" />
          <span className="banner_txt">{texte}</span>
        </div>
      );
}

export default Banner