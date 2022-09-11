import { GET_MOVIES_RULES } from '../../components/Api';
import { getMovies } from '../../components/Api';
import { useEffect } from 'react';

const Home = () => {
    useEffect(() => {
    // getMovies(GET_MOVIES_RULES.trends)
    // getMovies(GET_MOVIES_RULES.search, 'matrix') details
    getMovies(GET_MOVIES_RULES.details, '', 616037)
    getMovies(GET_MOVIES_RULES.credits, '' , 616037)
    
  }, [])
}

export default Home;