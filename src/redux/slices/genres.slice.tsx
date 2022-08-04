import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {moviesService} from "../../services";
import {IGenre, Igenres, IMoviesGenre} from "../../interface";


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
const getMoviesByGenre = createAsyncThunk<IMoviesGenre,{id:number,page:string}>(
    'genresSlice/getMoviesByGenre',
    async ({id,page}, {rejectWithValue}) => {
        try {
            return  await moviesService.getByGenreId(id,page)
        }
        catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
)


interface IState {
    movies: IMoviesGenre|null
    genres: null|Igenres[]
    total_pages: null|number
    statusGenres: null|string
    statusMovies: null|string
    error: null|string|unknown
}
const initialState:IState= {
    movies: null,
    genres: null,
    total_pages: null,
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
                .addCase(getGenres.pending,(state, action)=>{
                    state.statusGenres = 'pending'
                })
                .addCase(getGenres.fulfilled,(state, action)=>{
                    state.statusGenres = 'fulfilled'
                    state.genres = action.payload.genres
                })
                .addCase(getGenres.rejected,(state, action)=>{
                    state.statusGenres = 'rejected'
                    state.error = action.payload
                })
                .addCase(getMoviesByGenre.pending,(state, action)=>{
                    state.statusMovies = 'pending'
                })
                .addCase(getMoviesByGenre.fulfilled,(state, action)=>{
                    state.statusMovies = 'fulfilled'
                    state.movies = action.payload
                    state.total_pages = action.payload.total_pages
                })
                .addCase(getGenres.rejected,(state, action)=>{
                    state.statusMovies = 'rejected'
                    state.error = action.payload
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