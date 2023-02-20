import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";



const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

//  'theme', dafaultDark ? 'dark' : 'light',
//const switchTheme = ():void => {
//         const newTheme:string = theme === "dark" ? "light" : "dark"
//         setTheme(newTheme)
//     }

const putTheme =createAsyncThunk<any,void>(
    'ThemeSlice/putTheme',
    async (_,{rejectWithValue})=>{
        try {
            const defaultDark = await window.matchMedia('(prefers-color-scheme: dark)').matches
        return defaultDark
        }
        catch (e) {
            return rejectWithValue(e)
        }
    }
)
interface ITheme {
    theme:object
    switchTheme:any
}
const initialState:ITheme = {
    theme:{},
    switchTheme:null
};
createSlice({
    name:'ThemeSlice',
    initialState,
    reducers:{

    },
    extraReducers:builder =>
        builder
            .addCase(putTheme.fulfilled,(state, action)=>{
                state.theme = {theme: action.payload ? 'dark' : 'light'}
                state.switchTheme = function  ():void {
        const newTheme:string = theme === "dark" ? "light" : "dark"
        setTheme(newTheme)
    }
            })

})