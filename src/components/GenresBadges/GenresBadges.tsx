import {Link} from "react-router-dom";
import Badge from 'react-bootstrap/Badge'
import {IDetGenres} from "../../interface";
import {FC, ReactNode} from "react";

interface IProps {
    genres:IDetGenres[]|null
    children?: ReactNode
}

const GenresBadges:FC<IProps> = ({genres}) => {
    return (
        <div>{genres?.map(({name, id}) => {
            return <Link to={'/genres/' + id} key={id}>
                <Badge bg={"primary"}
                       style={{backgroundColor: "yellow", color:"Purple"}}>{name}</Badge>
            </Link>
        })}
        </div>
    );
};

export {GenresBadges};

// name={name}
// backgroundColor={`${randomColor()}`}
