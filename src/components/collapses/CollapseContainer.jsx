import Collapsible from "./Collapsible.jsx";
import aboutData from "../../data/about.json";
import logementData from "../../data/logements.json";
import { useLocation } from "react-router-dom";
import FicheLogement from "../../pages/FicheLogement/index.jsx";

const CollapsesContainer = () => {
  const location = useLocation();

  let data = [];

  if (location.pathname === "/about") {
    data = aboutData;
  }

  if (location.pathname.startsWith('/fiche-logement/')) {
    data = logementData;
  }

  return (
    <section className="collapsibles">
      {data.map((value, index) => {

        let collapseContent = "";
        let collapseTitle = "";

        if (location.pathname === "/about") {
          collapseContent = value.content;
          collapseTitle = value.title;
        }
 
        if (location.pathname.startsWith('/fiche-logement/')) {
          collapseContent = value.description;
          collapseTitle = value.title;
        }

        return (
          <Collapsible
            key={index}
            title={collapseTitle}
            content={collapseContent}
          />
        );
      })}
    </section>
  );
};

export default CollapsesContainer;
