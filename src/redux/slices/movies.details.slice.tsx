import {moviesService} from "../../services";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {ICredits, IDetails, ISimSearch} from "../../interface";

const getCredit = createAsyncThunk<ICredits,number>(
    'moviesDetailsSlice/getCredit',
    async (id,{rejectWithValue})=>{
        try {
            return  await moviesService.getCredits(id)
        }
        catch (e) {
            return rejectWithValue(e)

        }
    }
)
const getDetails = createAsyncThunk<IDetails,number>(
    'moviesDetailsSlice/getCredit',
    async (id,{rejectWithValue})=>{
        try {
            return await moviesService.getDetails(id)
        }
        catch (e) {
            return rejectWithValue(e)
        }
    }
)
const getSimilar = createAsyncThunk<ISimSearch,number>(
    'moviesDetailsSlice/getSimilar',
    async (id,{rejectWithValue})=>{
        try {
            return  await moviesService.getSimilar(id)
        }
        catch (e) {
            return rejectWithValue(e)
        }
    }
)
interface IState {
    movieDesc: null|any
    credits: null|any
    similar: null|any
    error:null|string|unknown
    status:null|string
}

const initialState:IState = {
    movieDesc: null,
    credits: null,
    similar: null,
    status: null,
    error: null
}
const moviesDetailsSlice = createSlice({
    name: 'movieDetailsSlice',
    initialState,
    reducers: {
        resetStore: (state) => {
            state.movieDesc = null
            state.credits = null
            state.similar = null
            state.status = null
            state.error = null
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getCredit.fulfilled,(state, action)=>{
                state.status = 'fulfilled'
                state.credits = action.payload.cast.slice(0,10)
            })
            .addCase(getDetails.fulfilled,(state, action)=>{
                state.status = 'fulfilled'
                state.movieDesc = action.payload
            })
            .addCase(getSimilar.fulfilled,(state, action)=>{
                state.status = 'fulfilled'
                state.similar = action.payload.results.slice(0,10)
            })
            .addDefaultCase((state, action) => {
                const [type] = action.type.split('/').splice(-1);
                switch (type) {
                    case 'rejected':
                        state.error = action.payload;
                        state.status = 'rejected';
                        break;
                    case 'pending':
                        state.error = null;
                        state.status = 'pending';
                        break;
                }

            })
})


const {reducer:moviesDetailsReducer,actions:{resetStore}} = moviesDetailsSlice
const moviesActions = {
    getDetails,
    getCredit,
    getSimilar,
    resetStore
 }
export {
    moviesActions,
    moviesDetailsReducer
 }