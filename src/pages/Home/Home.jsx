import { GET_MOVIES_RULES } from '../../components/Api';
import { getMovies } from '../../components/Api';
import { useEffect, useState } from 'react';
import { HomeMoviesList } from '../../components/HomeMoviesList/HomeMoviesList';

const Home = () => {
    const [trendingMovies, setTrendingMovies] = useState(null);

    useEffect(() => {
        getMovies(GET_MOVIES_RULES.trends).then(res => {setTrendingMovies(res.results)})
        // getMovies(GET_MOVIES_RULES.details, '', 616037)
        // getMovies(GET_MOVIES_RULES.credits, '' , 616037)
    
    }, []);
    return (
        <HomeMoviesList movies={trendingMovies} />
    )
}

export default Home;