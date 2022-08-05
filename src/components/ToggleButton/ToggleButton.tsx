import {FC} from "react";
import {IPropsTheme} from "../Header/Header";

const ToggleButton:FC<IPropsTheme> = ({switchTheme, theme}) => {
    return (
        <div className={'dark-mode-toggle'}>
            <div>DarkMode:</div>
            <input type='checkbox' id='toggle' checked={theme === 'dark'} onChange={() => switchTheme()}/>
            <label htmlFor='toggle'/>
        </div>
    );
};

export {ToggleButton};