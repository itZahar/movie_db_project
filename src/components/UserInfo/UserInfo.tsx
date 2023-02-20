import {FC, useState} from "react";
import {IPropsTheme} from "../Header/Header";
import {ToggleButton} from "../ToggleButton/ToggleButton";
import './UserInfo.css'

const UserInfo:FC<IPropsTheme> = ({switchTheme, theme}) => {
    const [isOpened, setIsOpened] = useState(false);

    return (
        <div className={'user'} onClick={() => setIsOpened(!isOpened)}>
            <img src='/MovieDB.jpg' alt='image'/>
            <div className={'drop-down-container'} style={{display: isOpened ? "block" : "none"}}>
                <div className={'drop-down'} onClick={e => e.stopPropagation()}>
                    <p>Hats Zakhar</p>
                    <ToggleButton switchTheme={switchTheme} theme={theme}/>
                </div>
            </div>
        </div>
    );
};

export {UserInfo};