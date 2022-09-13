import { GET_MOVIES_RULES } from '../../components/Api';
import { getMovies } from '../../components/Api';
import { useEffect, useState } from 'react';
import { MoviesList } from '../../components/MoviesList/MoviesList';

const Home = () => {
    const [trendingMovies, setTrendingMovies] = useState(null);

    useEffect(() => {
        getMovies(GET_MOVIES_RULES.trends).then(res => {setTrendingMovies(res.results)})
    }, []);
    return (
        <MoviesList movies={trendingMovies} path={"movies/"} />
    )
}

export default Home;