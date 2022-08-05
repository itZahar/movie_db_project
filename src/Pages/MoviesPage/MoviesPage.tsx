import {FC, useEffect} from "react";
import {useSearchParams} from "react-router-dom";

import {MovieListCard, Pagination} from "../../components";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux";

const MoviesPage:FC = () => {
    const {movies,total_pages,status} = useAppSelector(state => state.movie)
    const {movies: foundMovies, status: foundStatus} = useAppSelector(state => state.search);
    const dispatch=useAppDispatch()
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        if (!searchParams.get('page')) {
            setSearchParams({page: '1'})
        }
        const page = searchParams.get('page');
        dispatch(movieActions.getMovies({page}))
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }, [setSearchParams,searchParams,dispatch])
    return(<div>
            {status === 'fulfilled' ? <div className={'container'}>
                <MovieListCard movies={(foundMovies.length > 0 && foundStatus === 'fulfilled') ? foundMovies : movies}/>
                <Pagination total_pages={total_pages}/> </div> : <div className={'loading'}> Loading...</div> }
        </div>)
}

export {MoviesPage}