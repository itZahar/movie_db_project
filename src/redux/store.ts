import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {movieReducer, moviesDetailsReducer} from "./slices";
import {searchReducer} from "./slices/serch.slice";
import {genresReducer} from "./slices/genres.slice";


const rootReducer = combineReducers({
    movie:movieReducer,
    movieDesc:moviesDetailsReducer,
    search:searchReducer,
    genres:genresReducer
})
const setupStore = () => configureStore({
    reducer:rootReducer
})
type RootState = ReturnType<typeof rootReducer>
type AppStore = ReturnType<typeof setupStore>
type AppDispatch = AppStore['dispatch']

export type {
    RootState,
    AppStore,
    AppDispatch
}
export {
    setupStore
}