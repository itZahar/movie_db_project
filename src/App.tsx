import {FC} from 'react'
import {Navigate, Route, Routes} from "react-router-dom";

import './App.css';
import {MainLayout,MoviesByGenre} from "./components";
import {MoviePage,MoviesPage} from "./Pages";
import {GenresPage} from "./Pages";


const App:FC = () => {

    return(<div>
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
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