import {FC, ReactNode} from "react";
import {ISimSearchGenreRes} from "../../interface";
import {MovieList} from "../MovieList/MovieList";
import './MovieListCard.css'

interface Iprops {
    movies:ISimSearchGenreRes[]
    children?: ReactNode
}

const MovieListCard:FC<Iprops> = ({movies}) => {
    return (
        <div className={'movies-container'}>{movies.map(movie => <MovieList key={movie.id} movie={movie}/>)}</div>
    );
};

export {MovieListCard}