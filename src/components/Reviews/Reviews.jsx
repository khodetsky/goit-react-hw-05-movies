import { useParams } from "react-router-dom";
import { GET_MOVIES_RULES } from '../Api';
import { getMovies } from '../Api';
import { useEffect, useState } from 'react';
import { Button } from '../Button/Button';
import { ButtonLink } from '../Button/Button.styled';
import { ReviewsList, ReviewsListItem, ReviewAuthor, ReviewsNotification } from './Reviews.styled';

export const Reviews = () => {
    const [reviews, setReviews] = useState(null);
    const { moviesId } = useParams();

    useEffect(() => {
        getMovies(GET_MOVIES_RULES.reviews, '', moviesId).then(res => { setReviews(res.results) })
    }, [moviesId])
    
    return (
        <>
            <Button><ButtonLink to={`/movies/${moviesId}`}>Close reviews</ButtonLink></Button>
            <ReviewsList>
                {reviews && (reviews.length > 0 ? (
                    reviews.map(review => (
                        <ReviewsListItem key={review.id}>
                            <ReviewAuthor>Author: {review.author}</ReviewAuthor>
                            <p>{review.content}</p>
                        </ReviewsListItem>
                    ))
                ) : (<ReviewsNotification>This movie has no reviews</ReviewsNotification>))}
            </ReviewsList>
        </>
    )
}