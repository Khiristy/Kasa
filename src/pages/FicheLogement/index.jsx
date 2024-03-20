import CollapseContainer from "../../components/collapses/CollapseContainer.jsx";
import Carrousel from "../../components/logements/Carrousel.jsx";
import logementData from "../../data/logements.json";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function FicheLogement() {
  const navigate = useNavigate();
  let logementCurrent = null;
  const { id } = useParams();

  for (const logement of logementData) {
    if (logement.id === id) {
      logementCurrent = logement;
    }
  }

  useEffect(() => {
    if (logementCurrent === null) {
      navigate("/error");
    }
  }, []);

  if (logementCurrent !== null) {
    return (
      <div>
        <h1>Fiche Logement</h1>
        <Carrousel pictures={logementCurrent.pictures} />
        <CollapseContainer />
      </div>
    );
  }
}

export default FicheLogement;
