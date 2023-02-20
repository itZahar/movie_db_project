import {useForm} from "react-hook-form";
import {useAppDispatch} from "../../hooks";
import React, {FC, ReactNode} from "react";
import {searchActions} from "../../redux/slices/serch.slice";
import './SearchMovie.css'


export interface IProps {
    isOpened:any
    children?: ReactNode
}

const SearchMovie:FC<IProps> = ({isOpened}) => {
    const {register, watch} = useForm();
    const dispatch = useAppDispatch();

    React.useEffect(() => {
        watch(async ({search}) => {
            dispatch(searchActions.getMoviesBySearch({search}))
        });
    }, [watch]);
    return (
        isOpened && <div>
            <input type="text" placeholder={'Search movie'} {...register('search')}/>
        </div>
    );
};

export {SearchMovie};