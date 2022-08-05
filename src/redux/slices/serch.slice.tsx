import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {moviesService} from "../../services";
import {ISimSearch,ISimSearchRes} from "../../interface";


const getMoviesBySearch = createAsyncThunk<ISimSearch, {search:string}>(
    'searchSlice/getMoviesBySearch',
    async ({search},{rejectWithValue})=>{
        try {
            return  await moviesService.getBySearch(search)
        }
        catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
)
interface IState {
    movies: ISimSearchRes[]
    isOpened: boolean
    status: null|string
    error: null|string|unknown
}
const initialState:IState = {
    movies:[],
    isOpened: false,
    status: null,
    error: null
}
export const searchSlice = createSlice(
    {
        name: 'searchSlice',
        initialState,
        reducers: {
            setSearchIsOpened:((state, action) => {
                state.isOpened = action.payload.isOpened
            })
        },
        extraReducers: builder =>
            builder
                .addCase(getMoviesBySearch.pending,(state, action)=>{
                    state.status = "pending"
                })
                .addCase(getMoviesBySearch.fulfilled,(state, action)=>{
                    state.status = "fulfilled"
                    state.movies = action.payload.results
                })
                .addCase(getMoviesBySearch.rejected,(state, action)=>{
                    state.status = "rejected"
                    state.error = action.payload
                })

    }
)

const {reducer:searchReducer,actions:{setSearchIsOpened}}=searchSlice
const searchActions = {
    setSearchIsOpened,
    getMoviesBySearch
}

export {
    setSearchIsOpened,
    searchActions,
    searchReducer
}
