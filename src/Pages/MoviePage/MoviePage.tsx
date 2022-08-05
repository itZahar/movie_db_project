import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {FC, useEffect} from "react";

import {moviesActions} from "../../redux";
import {MovieDescription, Cast, MovieListCard} from "../../components";



const MoviePage:FC = () => {
    const {movieDesc, status, similar} = useAppSelector(state => state.movieDesc);
    const dispatch = useAppDispatch();

    const {id} = useParams();
    let Id = Number(id)

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
        dispatch(moviesActions.getSim(Id))
        dispatch(moviesActions.getDetails(Id))
        dispatch(moviesActions.getCredit(Id))
        return () => {
            dispatch(moviesActions.resetStore())
        }
    }, [id])

    return (
        <div>
            {status === 'fulfilled' ? <div className={'movie-desc'}>
        <img src={`https://image.tmdb.org/t/p/original${movieDesc.backdrop_path}`} alt=''/>
    <div className={'movie-desc__main'}>
        <div><h2>{movieDesc.title}</h2></div>
    <div><h4>{movieDesc.tagline}</h4></div>
    </div>
    <MovieDescription />
    <Cast/>
    <div className={'similar container'}>
        <h3>Similar</h3>
        <MovieListCard movies={similar}/>
    </div>
    </div> : <div className={'loading'}>
    Loading...
    </div>}
    </div>
);
};
    //movieDesc={movieDesc}

    export {MoviePage};