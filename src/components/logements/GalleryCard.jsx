import logementData from "../../data/logements.json";
import Card from "../../components/logements/Card.jsx";
import { NavLink } from "react-router-dom";

const Gallery = () => {
  return (
    <section className="gallery">
      <div className="gallery_container">
        {logementData.map((logement) => {
          return (
            <article key={logement.title}>
              <NavLink to={`/fiche-logement/${logement.id}`}>
                <Card image={logement.cover} title={logement.title} />
              </NavLink>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Gallery;
