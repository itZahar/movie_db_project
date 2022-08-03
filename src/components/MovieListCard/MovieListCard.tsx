import {FC, ReactNode} from "react";
import {IMovie} from "../../interface";

interface Iprops {
    movie:IMovie,
    children?: ReactNode
}

const MovieListCard:FC<Iprops> = ({movie}) => {
    const {original_title} = movie

    return(<div>
        <div>original_title:{original_title}</div>
    </div>)
}

export {MovieListCard}