import Gallery from "../../components/logements/GalleryCard.jsx";
import Banner from "../../components/Banner.jsx";

import homeBanner from "../../assets/images/homeBanner.png";

function Home() {
  return (
    <main>
      <Banner texte="Chez vous, partout et ailleurs" image={homeBanner}/>
      <Gallery />
    </main>
  );
}

export default Home;
