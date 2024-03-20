import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from './pages/Home/index.jsx';
import About from './pages/About/index.jsx';
import FicheLogement from './pages/FicheLogement/index.jsx';
import Error from './pages/Error/index.jsx';
import { BrowserRouter, Routes, Route  } from "react-router-dom";


const App = () => {
    return (
        <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="fiche-logement/:id" element={<FicheLogement />} />
          <Route path="*" element={<Error />} />
          {/* <Route path='*' element={<Navigate to='/404' />} /> */}
        </Routes>
        <Footer />
        </BrowserRouter>
    )
  }
  
  export default App;