import {Link, useLocation} from "react-router-dom";
import {FC, ReactNode} from "react";
import './PaginationButton.css'

interface Iprops {
    to:any

    disabled:boolean

    children?: ReactNode
}
// @ts-ignore
const PaginationButton:FC<Iprops> = ({to, state, disabled = false, isNav = false, children, ...props}) => {
    const {search} = useLocation();

    return (
        <Link to={to} state={state} {...props} className={'pagination'}>
            <button disabled={disabled} className={isNav && search === to ? 'active' : ''}>{children}</button>
        </Link>
    );
};

export {
    PaginationButton
}