import {FC} from 'react'
import {Outlet} from "react-router-dom";
import {Header} from "../Header/Header";
import {useAppDispatch} from "../../hooks";
import {searchActions} from "../../redux/slices/serch.slice";
import './MainLayout.css'
import useLocalStorage from "use-local-storage";


const MainLayout:FC = () => {
    const dispatch = useAppDispatch();

    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

    const switchTheme = ():void => {
        const newTheme:string = "dark" ? "light" : "dark"
        setTheme(newTheme)
    }


    return (
        <div className="App" data-theme={theme}>
            <Header switchTheme={switchTheme} theme={theme}/>
            <div className={'main'} onClick={()=> dispatch(searchActions.setSearchIsOpened({isOpened: false}))}><Outlet/></div>
        </div>
    );
};

export {MainLayout};