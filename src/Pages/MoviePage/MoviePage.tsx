import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {FC, useEffect} from "react";
import {moviesService} from "../../services";
import {moviesActions} from "../../redux";

const MoviePage:FC = () => {
    const {movieDesc, status, similar} = useAppSelector(state => state.movieDesc);
    const dispatch = useAppDispatch();

    const {id:number} = useParams();
    // const getMovieDesc = (id:number):void =>{
    //     moviesService.getSimilar(id)
    //     moviesService.getDetails(id)
    //     moviesService.getCredits(id)
    // }
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
        dispatch(moviesService.getSimilar({id}))

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
    <MovieDescription movieDesc={movieDesc}/>
    <Cast/>
    <div className={'similar container'}>
        <h3>Similar</h3>
        <MovieCards movies={similar}/>
    </div>
    </div> : <div className={'loading'}>
    Loading...
    </div>}
    </div>
);
};

    export {MoviePage};