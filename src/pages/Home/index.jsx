import Header from '../../components/Header.jsx';
import Card from '../../components/Card.jsx';
import Banner from '../../components/Banner.jsx';
import LogementsList from '../../components/LogementsList.jsx';


function Home() {
  return (
    <div className='components_pos'>
    <Header />
    <Banner />
    <LogementsList />
    <Card />
    </div>
  );
}

export default Home;
