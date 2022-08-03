import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {moviesService} from "../../services";
import {IMovies, IMovie, IDetails} from "../../interface";
import {AxiosError} from "axios";



interface IState {
    movies : IMovie[];
}

const initialState:IState = {
    movies: []
}

const getDetails = createAsyncThunk<IDetails, {id:number}>(
    'movieSlice/getDetails',
    async ({id},{rejectWithValue})=>{
        try {
            const {data} = await moviesService.getDetails(id)
            return data
        }
        catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
)
// const getMovies = createAsyncThunk<IMovie[],void> (
//     'movieSlice/getMovies',
//     async (_,{rejectWithValue}) => {
//         try {
//              const {data} = await moviesService.getMovies()
//             return data
//         }
//         catch (e){
//             const err = e as AxiosError
//             return rejectWithValue(err.response?.data)
//         }
//     }
// )

const movieSlice = createSlice({
    name:'movieSlice',
    initialState,
    reducers:{
    },
    extraReducers:builder =>
        builder
            // .addCase(getMovies.fulfilled,(state, action) => {
            //     console.log(action.payload)
            // })
            .addCase(getDetails.fulfilled,(state, action)=>{
                console.log(action.payload)
            })

})

const {reducer:movieReducer} = movieSlice
const movieActions = {
    // getMovies,
    getDetails
}

export {movieReducer,movieActions}