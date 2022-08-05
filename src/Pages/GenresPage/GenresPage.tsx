import {Outlet} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {FC, useEffect} from "react";
import {GenresBadges} from "../../components";
import {genreActions} from "../../redux/slices/genres.slice";


const GenresPage:FC = () => {
    const {genres, statusGenres} = useAppSelector(state => state.genres);
    const dispatch = useAppDispatch();

    useEffect(()=>{
        dispatch(genreActions.getGenres())
    },[dispatch])
    return (
        <div>
            {statusGenres === 'fulfilled' ? <div>
                <GenresBadges genres={genres}/>
                <Outlet/>
            </div> : <div className={'loading'}>Loading...</div>}
        </div>
    );
};

export {GenresPage};