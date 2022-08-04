import {FC} from 'react'
import {Navigate, Route, Routes} from "react-router-dom";

import './App.css';
import {MainLayout, MovieDetails} from "./components";
import {MoviesPage} from "./Pages";

const App:FC = () => {
    return(<div>
        <Routes>
            <Route path={'/'} element={<MainLayout switchTheme={switchTheme} theme={theme}/>}>
                <Route index element={<Navigate to={'movies'}/>}/>
                <Route path={'movies'} element={<MoviesPage/>}/>
                <Route path={'movies/:id'} element={<MovieDetails/>}/>
            </Route>
        </Routes>
        <Routes>
            <Route path={'/'} element={<Layout switchTheme={switchTheme} theme={theme}/>}>
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