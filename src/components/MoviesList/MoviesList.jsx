import { useLocation } from "react-router-dom";
import { MovieLink, MoviesListItem, MoviesListStyled } from './MoviesList.styled';

export const MoviesList = ({ movies, path }) => {
    const location = useLocation();
    return (
        <>
            <MoviesListStyled>
                {movies && (movies.map(movie => (
                    <MoviesListItem key={movie.id}>
                        <MovieLink to={`${path}${movie.id}`} state={{ from: location }}>{movie.title}</MovieLink>
                    </MoviesListItem>
                )))}
            </MoviesListStyled>
        </>
    )
}