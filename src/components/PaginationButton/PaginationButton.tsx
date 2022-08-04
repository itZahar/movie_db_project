import {Link, useLocation} from "react-router-dom";


const PaginationButton = ({to, state, disabled = false, isNav = false, children, ...props}) => {
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