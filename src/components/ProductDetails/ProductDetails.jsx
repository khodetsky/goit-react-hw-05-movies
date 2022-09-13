import { useParams, Outlet, Link, useLocation } from "react-router-dom";
import { GET_MOVIES_RULES } from '../Api';
import { getMovies } from '../Api';
import { useEffect, useState} from 'react';

const IMG_BASE_URL = 'https://image.tmdb.org/t/p/';
const IMG_FILE_SIZE = 'w200';

const ProductDetails = () => {
    const [movieInfo, setMovieInfo] = useState(null);
    const { moviesId } = useParams();
    const location = useLocation();
    const backLinkHref = location.state?.from ?? "/movies";

    useEffect(() => {
            getMovies(GET_MOVIES_RULES.details, '', moviesId).then(res => { setMovieInfo(res) })
    }, [moviesId]);

    const ratingToPercentages = () => {
        if (movieInfo) {
            const rating = movieInfo.vote_average * 10;
            return Math.round(rating);
        }
    }
    
    return (
        <>
            <button>
                <Link to={backLinkHref}>Go back</Link>
            </button>
            {movieInfo && (
                <>
                    <img src={`${IMG_BASE_URL}${IMG_FILE_SIZE}${movieInfo.poster_path}`} alt={movieInfo.title} />
                    <p>User score: {ratingToPercentages()}%</p>
                    <p>Overview</p>
                    <p>{movieInfo.overview}</p>
                    <p>Genres</p>
                    <div>{movieInfo.genres.map(genre => (<p key={genre.id}>{genre.name}</p>))}</div>
                    <ul>
                        <li>
                            <Link to="cast" >Cast</Link>
                        </li>
                        <li>
                          <Link to="reviews">Reviews</Link>
                        </li>
                    </ul>
                    <Outlet/>
                </>
            )}
        </>
    )

}

export default ProductDetails;