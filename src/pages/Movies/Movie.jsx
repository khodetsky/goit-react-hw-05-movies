import { GET_MOVIES_RULES } from '../../components/Api';
import { getMovies } from '../../components/Api';
import { useEffect, useState } from 'react';
import { useSearchParams } from "react-router-dom";
import { MoviesList } from '../../components/MoviesList/MoviesList';
import { SearchForm } from '../../components/SearchForm/SearcForm';

const Movie = () => {
    const [searchMovies, setSearchMovies] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();
    
    useEffect(() => {
        const query = searchParams.get("query");

        if (!query) {
            return;
        }
        getMovies(GET_MOVIES_RULES.search, query).then(res => { setSearchMovies(res.results) })
    }, [ searchParams, setSearchParams])

    const onSubmit = ({ searchValue }, { resetForm }) => {
        setSearchParams({ query: searchValue });
        resetForm();
    }

    return (
        <>
            <SearchForm submit={onSubmit} />
            {searchMovies && (<MoviesList movies={searchMovies} path={""} />)}
        </>
    )


}

export default Movie;