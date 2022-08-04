import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {moviesService} from "../../services";
import { IMovieGenre, IMoviesGenre} from "../../interface";
import {AxiosError} from "axios";


interface IState {
    movies : IMovieGenre[]
    total_pages:number|null
    error:null|string|unknown
    status:null|string
}
const initialState:IState = {
    movies: [],
    total_pages:null,
    error:null,
    status:null
}

const getMovies = createAsyncThunk<IMoviesGenre,{page:string|null}> (
    'movieSlice/getMovies',
    async ({page},{rejectWithValue}) => {
        try {
            const {data} = await moviesService.getMovies(page)
            return data
        }
        catch (e){
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
)

const movieSlice = createSlice({
    name:'movieSlice',
    initialState,
    reducers:{
    },
    extraReducers:builder =>
        builder
            .addCase(getMovies.pending,(state, action)=>{
                state.status = "pending"
            })
            .addCase(getMovies.fulfilled,(state, action) => {
                state.movies = action.payload.results
                state.total_pages = action.payload.total_pages
                state.status = "fulfilled"
            })
            .addCase(getMovies.rejected,(state, action)=>{
                state.status = "rejected"
                state.error = action.payload
            })

})

const {reducer:movieReducer} = movieSlice
const movieActions = {
    getMovies
}

export {movieReducer,movieActions}