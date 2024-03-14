import CollapseContainer from "../../components/collapses/CollapseContainer.jsx";
import Carrousel from "../../components/logements/Carrousel.jsx";
import logementData from "../../data/logements.json";
import { useParams } from 'react-router-dom';


function FicheLogement() {
    const {id} = useParams()
    let logementCurrent = null
        for (const logement of logementData) {

            if (logement.id === id) {
            logementCurrent = logement
            }
        }
        
  return (
    <div>
      <h1>Fiche Logement</h1>
      <Carrousel pictures={logementCurrent.pictures} />
      <CollapseContainer />
    </div>
  );
}

export default FicheLogement;
