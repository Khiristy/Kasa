import Banner from "../../components/Banner.jsx";
import aboutBanner from "../../assets/images/aboutBanner.png";

function About() {
  return (
    <div>
      <h1>A propos</h1>
      <Banner image={aboutBanner}/>
    </div>
  );
}

export default About;
