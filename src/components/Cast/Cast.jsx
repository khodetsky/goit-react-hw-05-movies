import { getMovies } from '../Api';
import { useParams, NavLink } from "react-router-dom";
import { GET_MOVIES_RULES } from '../Api';
import { useEffect, useState } from 'react';
import noPhotoImg from '../../no-image.jpg';

const IMG_BASE_URL = 'https://image.tmdb.org/t/p/';
const IMG_FILE_SIZE = 'w500';


export const Cast = () => {
    const [actorsInfo, setActorsInfo] = useState(null);
    const { moviesId } = useParams();

    useEffect(() => {
        getMovies(GET_MOVIES_RULES.credits, '', moviesId).then(res => { setActorsInfo(res.cast) })
    }, [moviesId])

    return (
        <>
            <button><NavLink to={`/movies/${moviesId}`}>Close cast</NavLink></button>
            <ul>
                {actorsInfo && (
                    actorsInfo.map(actor => (
                        <li key={actor.id}>
                            {actor.profile_path ? (<img src={`${IMG_BASE_URL}${IMG_FILE_SIZE}${actor.profile_path}`} alt={`${actor.name}`} width="100" />)
                            : (<img src={noPhotoImg} alt={`${actor.name}`} width="100" />)}
                            <p>{actor.name}</p>
                            <p>{actor.character}</p>
                        </li>
                    ))
                )}
            </ul>
        </>
    )
}