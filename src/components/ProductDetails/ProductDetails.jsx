import { useParams, Outlet, NavLink } from "react-router-dom";
import { GET_MOVIES_RULES } from '../Api';
import { getMovies } from '../Api';
import { useEffect, useState} from 'react';

const IMG_BASE_URL = 'https://image.tmdb.org/t/p/';
const IMG_FILE_SIZE = 'w200';

const ProductDetails = () => {
    const [movieInfo, setMovieInfo] = useState(null);
    const { moviesId } = useParams();

    useEffect(() => {
            getMovies(GET_MOVIES_RULES.details, '', moviesId).then(res => { setMovieInfo(res) })
    }, [moviesId]);
    
    return (
        <>
            {movieInfo && (
                <>
                    <img src={`${IMG_BASE_URL}${IMG_FILE_SIZE}${movieInfo.poster_path}`} alt={movieInfo.title} />
                    <p></p>
                    <ul>
                        <li>
                            <NavLink to="cast" >Cast</NavLink>
                        </li>
                        <li>
                          <NavLink to="reviews">Reviews</NavLink>
                        </li>
                    </ul>
                    <Outlet/>
                </>
            )}
        </>
    )

}

export default ProductDetails;