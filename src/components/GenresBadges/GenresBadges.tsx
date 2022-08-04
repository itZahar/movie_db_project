import {Link} from "react-router-dom";
import Badge from 'react-bootstrap/Badge'
import {IDetGenres} from "../../interface";
import {FC, ReactNode} from "react";

interface IProps {
    genres:IDetGenres[]
    children?: ReactNode
}

const GenresBadges:FC<IProps> = ({genres}) => {
    return (
        <div>{genres.map(({name, id}) => {
            return <Link to={'/genres/' + id} key={id}>
                <Badge bg={"primary"} name={name}
                       style={{color: 'white'}}
                       backgroundColor={`${randomColor()}`}/>
            </Link>
        })}
        </div>
    );
};

export {GenresBadges};