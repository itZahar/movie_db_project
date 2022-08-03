import {FC, useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux";
import {MovieListCard} from "../MovieListCard/MovieListCard";
import {IMovie} from "../../interface";

const MovieList:FC = () => {

    const {movies} = useAppSelector(state => state.movie)
    const dispatch=useAppDispatch()
    useEffect(()=>{
        dispatch(movieActions.getDetails({id:2}))
    },[dispatch])
    return(<div>
        {
         movies.map(movie => <MovieListCard movie={movie}/>)
        }
    </div>)
}

export {MovieList}