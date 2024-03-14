import Banner from "../../components/Banner.jsx";
import  CollapsesContainer from "../../components/collapses/CollapseContainer.jsx";
import aboutBanner from "../../assets/images/aboutBanner.png";

function About() {
  return (
    <div>
      <h1>A propos</h1>
      <Banner image={aboutBanner}/>
      <CollapsesContainer />
    </div>
  );
}

export default About;
