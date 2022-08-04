import {Link} from "react-router-dom";
import {IMovieGenre, ISimSearchRes} from "../../interface";
import {FC, ReactNode} from "react";

interface IProps {
    movie:IMovieGenre|ISimSearchRes
    children?: ReactNode
}

const MovieList:FC<IProps> = ({movie}) => {
        return (
            <div className={'movie-card'}>
                <Link to={`/movies/${movie.id}`}>
                    <div className={'image'}>
                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt=''/>
                        <h3>
                            <div>{movie.title}</div>
                        </h3>
                    </div>
                </Link>
            </div>
        );
    };


export {MovieList}