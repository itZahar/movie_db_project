import {FC, ReactNode} from "react";
import {IMovieGenre, ISimSearchRes} from "../../interface";
import {MovieList} from "../MovieList/MovieList";

interface Iprops {
    movies:IMovieGenre[]|ISimSearchRes[]
    children?: ReactNode
}

const MovieListCard:FC<Iprops> = ({movies}) => {
    return (
        <div className={'movies-container'}>{movies.map(movie => <MovieList key={movie.id} movie={movie}/>)}</div>
    );
};

export {MovieListCard}