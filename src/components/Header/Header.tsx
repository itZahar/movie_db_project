import {FC, ReactNode} from "react";
import {NavLink, useLocation} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {searchActions} from "../../redux/slices/serch.slice";
import {SearchIcon} from "../../images";
import {UserInfo} from "../UserInfo/UserInfo";
import {SearchMovie} from "../SearchMovie/SearchMovie";
import './Header.css'

export interface IPropsTheme {
    switchTheme:any
    theme:string
    children?: ReactNode
}

const Header:FC<IPropsTheme> = ({switchTheme, theme}) => {
    const dispatch = useAppDispatch();
    const {pathname} = useLocation();
    const {isOpened} = useAppSelector(state=> state.search);
    return (
        <div>
            <div className={'header'}>
                <div className={'nav-bar'}>
                    <NavLink to={'/movies'}>movies</NavLink>
                    <NavLink to={'/genres'}>genres</NavLink>
                </div>
                <div className={'search'}>
                    {(pathname === '/movies' && !isOpened) && <span onClick={() => dispatch(searchActions.setSearchIsOpened({isOpened: true}))}><SearchIcon theme={theme}/></span>}
                </div>
                <UserInfo switchTheme={switchTheme} theme={theme}/>
            </div>
            {isOpened && <div className={'search-box'}>
                <SearchMovie isOpened={isOpened}/>
            </div>}
        </div>
    );
};

export {Header};