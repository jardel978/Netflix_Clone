import { useEffect, useState } from 'react';
import './App.css';
import Tmdb from '../Tmdb';
import { Header } from './Header';
import { MovieRow } from '../Components/MovieRow';
import { FeatureMovie } from '../Components/FeatureMovie';
// import { FeatureMovie } from '../../public/images/Netflix_LoadTime.gif';

function App() {

  const [movieList, setMovieList] = useState([]);
  const [featureData, setFeatureData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      // recuperando lista com a função criada no Tmdb
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      //pegando filme em destaque
      let originals = list.filter((item) => item.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFeatureData(chosenInfo);
    }
    loadAll();
  }, []);

  useEffect(() => {
    const scrollListner = () => {
      if(window.scrollY > 20) {
        setBlackHeader(true);
      } else
        setBlackHeader(false);
    }

    window.addEventListener('scroll', scrollListner);

    return () => {
      window.removeEventListener('scroll', scrollListner);
    }
  }, []);

  return (
    <div className="page">
      <Header black={blackHeader}/>
  
      {featureData && <FeatureMovie item={featureData} />}

      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))} 
      </section>
      <footer>
        Desenvolvido por <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/jardel-silva-oliveira-b9a330213/">Jardel Oliveira</a><br/> 
        Direitos de imagem à Netflix<br/>
        Fonte de dados: Themoviedb.org
      </footer>

      {movieList.length <= 0 &&
        <did className="loading">
          <img src="../../public/images/Netflix_LoadTime.gif" alt="Carregando"></img>
        </did>
      }
    </div>
  );
}

export default App;
