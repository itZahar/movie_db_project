import {FC} from 'react'
import {Navigate, Route, Routes} from "react-router-dom";

import './App.css';
import {MainLayout} from "./components";

import {MoviePage} from "./Pages";

const App:FC = () => {


    return(<div>
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'movie'}/>}/>
                <Route path={'movie'} element={<MoviePage/>}/>
            </Route>
        </Routes>

    </div> )
}

export {App}