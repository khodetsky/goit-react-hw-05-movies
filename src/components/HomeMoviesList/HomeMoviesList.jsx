import { NavLink} from "react-router-dom";

export const HomeMoviesList = ({ movies }) => {
    return (
        <>
            <ul>
                {movies && (movies.map(movie => (
                    <li key={movie.id}>
                        <NavLink to="movies/:moviesId" >{movie.title}</NavLink>
                    </li>
                )))}
            </ul>
        </>
    )
}