import {FC} from 'react'
import {Navigate, Route, Routes} from "react-router-dom";

import './App.css';
import {MainLayout, MoviesByGenre} from "./components";
import {MoviePage,MoviesPage} from "./Pages";
import {GenresPage} from "./Pages";
import useLocalStorage from "use-local-storage";

const App:FC = () => {
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

    const switchTheme = ():void => {
        const newTheme:string = theme === "dark" ? "light" : "dark"
        setTheme(newTheme)
    }
    return(<div>
        <Routes>
            <Route path={'/'} element={<MainLayout switchTheme={switchTheme} theme={theme}/>}>
                <Route path={'/'} element={<Navigate to={'movies'}/>}/>
                <Route path={'movies'} element={<MoviesPage/>}/>
                <Route path={'movies/:id'} element={<MoviePage/>}/>
                <Route path={'genres'} element={<GenresPage/>}>
                    <Route path={':id'} element={<MoviesByGenre/>}/>
                </Route>
            </Route>
        </Routes>
    </div> )
}

export {App}