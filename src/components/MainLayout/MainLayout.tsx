import {FC} from 'react'
import {Outlet} from "react-router-dom";
import {Header, IPropsTheme} from "../Header/Header";
import {useAppDispatch} from "../../hooks";
import {searchActions} from "../../redux/slices/serch.slice";



const MainLayout:FC<IPropsTheme> = ({switchTheme, theme}) => {
    const dispatch = useAppDispatch();
    return (
        <div>
            <Header switchTheme={switchTheme} theme={theme}/>
            <div className={'main'} onClick={()=> dispatch(searchActions.setSearchIsOpened({isOpened: false}))}><Outlet/></div>
        </div>
    );
};

export {MainLayout};