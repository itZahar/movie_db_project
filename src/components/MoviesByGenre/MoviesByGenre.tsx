import {useParams, useSearchParams} from "react-router-dom";
import {FC, useEffect} from "react";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {genreActions} from "../../redux/slices/genres.slice";
import {MovieListCard} from "../MovieListCard/MovieListCard";
import {Pagination} from "../Pagination/Pagination";


const MoviesByGenre:FC = () => {
    const {movies, genres, statusMovies, total_pages} = useAppSelector(state => state.genres);
    const dispatch = useAppDispatch();

    const [searchParams, setSearchParams] = useSearchParams();
    const {id} = useParams();
    let Id = Number(id)

    useEffect(() => {
        if (!searchParams.get('page')) {
            setSearchParams({page: '1'})
        }
        const page = searchParams.get('page');
        dispatch(genreActions.getMoviesByGenre({Id, page}))
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }, [searchParams, Id])

    return (
        <div>
            {statusMovies === 'fulfilled' ? <div className={'by-genre container'}>
                <h3>{genres.map(genre => genre.id === Id && genre.name)}</h3>
                <MovieListCard movies={movies!.results}/>
                <Pagination total_pages={total_pages}/>
            </div> : <div className={'loading'}>Loading...</div>}
        </div>
    );
};

export {MoviesByGenre};