import { useParams, Outlet, useLocation } from "react-router-dom";
import { GET_MOVIES_RULES } from '../Api';
import { getMovies } from '../Api';
import { useEffect, useState } from 'react';
import { Button } from '../Button/Button';
import { ButtonLink } from '../Button/Button.styled';
import {
    MovieContainer, MovieInfoContainer, MovieInfoTitle, MovieInfoSubtitle,
    MovieInfoOverview, MovieInfoList, MovieGenresListItem, MovieInfoImage,
    MovieAdditionallyListItem, MovieAdditionallyLink} from './ProductDetails.styled';

const IMG_BASE_URL = 'https://image.tmdb.org/t/p/';
const IMG_FILE_SIZE = 'w300';

const ProductDetails = () => {
    const [movieInfo, setMovieInfo] = useState(null);
    const { moviesId } = useParams();
    const location = useLocation();
    const backLinkHref = location.state?.from ?? location.state;


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
        <div>
            <Button>
                <ButtonLink to={backLinkHref}>Go back</ButtonLink>
            </Button>
            {movieInfo && (
                <>
                    <MovieContainer style={{ display: "flex" }}>
                        <MovieInfoImage src={`${IMG_BASE_URL}${IMG_FILE_SIZE}${movieInfo.poster_path}`} alt={movieInfo.title} />
                        <MovieInfoContainer>
                            <MovieInfoTitle>{movieInfo.title}</MovieInfoTitle>
                            <MovieInfoSubtitle>User score: {ratingToPercentages()}%</MovieInfoSubtitle>
                            <MovieInfoSubtitle>Overview</MovieInfoSubtitle>
                            <MovieInfoOverview>{movieInfo.overview}</MovieInfoOverview>
                            <MovieInfoSubtitle>Genres</MovieInfoSubtitle>
                            <MovieInfoList>{movieInfo.genres.map(genre => (<MovieGenresListItem key={genre.id}>{genre.name}</MovieGenresListItem>))}</MovieInfoList>
                        </MovieInfoContainer>
                    </MovieContainer>
                    <MovieInfoList>
                        <MovieAdditionallyListItem>
                            <MovieAdditionallyLink to="cast" state={backLinkHref}>Cast</MovieAdditionallyLink>
                        </MovieAdditionallyListItem>
                        <MovieAdditionallyListItem>
                          <MovieAdditionallyLink to="reviews" state={backLinkHref}>Reviews</MovieAdditionallyLink>
                        </MovieAdditionallyListItem>
                    </MovieInfoList>
                    <Outlet />
                </>
            )}
        </div>
    )

}

export default ProductDetails;