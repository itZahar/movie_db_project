import {useSearchParams} from "react-router-dom";
import {FC, ReactNode} from "react";
import {PaginationButton} from "../PaginationButton/PaginationButton";

interface Iprops {
    total_pages:number
    children?: ReactNode
}
interface IParams {
    state:any
    isNav:boolean
    props:any
}

const Pagination:FC<Iprops> = ({total_pages}) => {
    const [searchParams] = useSearchParams();
    return (
        <div className={'paginationBtns'}>
            <PaginationButton to={`?page=${+searchParams.get('page')!- 1}`}
                              disabled={+searchParams.get('page')! <= 1}>prev</PaginationButton>
            <PaginationButton to={`?page=${+searchParams.get('page')! + 1}`}
                              disabled={+searchParams.get('page')! >= total_pages}>next</PaginationButton>
        </div>
    );
};

export {Pagination}