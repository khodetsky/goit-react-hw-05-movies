import { useParams, NavLink } from "react-router-dom";
import { GET_MOVIES_RULES } from '../Api';
import { getMovies } from '../Api';
import { useEffect, useState} from 'react';

export const Reviews = () => {
    const [reviews, setReviews] = useState(null);
    const { moviesId } = useParams();

    useEffect(() => {
        getMovies(GET_MOVIES_RULES.reviews, '', moviesId).then(res => { setReviews(res.results) })
    }, [moviesId])

    if(reviews) {console.log(reviews)}
    return (
        <>
            <button><NavLink to={`/goit-react-hw-05-movies/movies/${moviesId}`}>Close reviews</NavLink></button>
            <ul>
                {reviews && (reviews.length > 0 ? (
                    reviews.map(review => (
                        <li key={review.id}>
                            <p>{review.author}</p>
                            <p>{review.content}</p>
                        </li>
                    ))
                ) : (<p>This movie has no reviews</p>))}
            </ul>
        </>
    )
}