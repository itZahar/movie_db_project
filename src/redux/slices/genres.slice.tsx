import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {moviesService} from "../../services";
import {IDetGenres, IGenre, ISimSearchGenre} from "../../interface";


const getGenres = createAsyncThunk<IGenre,void>(
    'genresSlice/getGenres',
    async (_, {rejectWithValue}) => {
        try {
            const genres = await moviesService.getGenres()
            return {genres: [...genres.genres]}
        }
        catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
)
const getMoviesByGenre = createAsyncThunk<ISimSearchGenre,{Id:number,page:string|null}>(
    'genresSlice/getMoviesByGenre',
    async ({Id,page}, {rejectWithValue}) => {
        try {
            return  await moviesService.getByGenreId(Id,page)
        }
        catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
)

interface IState {
    movies: ISimSearchGenre|null
    genres: IDetGenres[]
    total_pages: number
    statusGenres: null|string
    statusMovies: null|string
    error: null|string|unknown
}
const initialState:IState= {
    movies: null,
    genres: [],
    total_pages: 0,
    statusGenres: null,
    statusMovies: null,
    error: null
}
export const genresSlice = createSlice(
    {
        name: 'genresSlice',
        initialState,
        reducers: {},
        extraReducers: builder =>
            builder
                .addCase(getGenres.fulfilled,(state, action)=>{
                    state.statusGenres = 'fulfilled'
                    state.genres = action.payload.genres
                })
                .addCase(getMoviesByGenre.fulfilled,(state, action)=>{
                    state.statusMovies = 'fulfilled'
                    state.movies = action.payload
                    state.total_pages = action.payload.total_pages
                })
                .addDefaultCase((state, action) => {
                    const [type] = action.type.split('/').splice(-1);
                    switch (type) {
                        case 'rejected':
                            state.statusMovies = 'rejected'
                            state.error = action.payload
                            break;
                        case 'pending':
                            state.statusMovies = 'pending';
                            break;
                    }
                })

    }
)
const {reducer:genresReducer} = genresSlice
const genreActions = {
    getGenres,
    getMoviesByGenre
}

export {
    genreActions,
    genresReducer
}