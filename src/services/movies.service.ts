import {AxiosRes, axiosService} from "./axios.service";
import {urls} from "../constants";
import {ICredits, IDetails, IGenre, IMoviesGenre, ISimSearch} from "../interface";


const moviesService = {
    getMovies:(page:any):AxiosRes<IMoviesGenre> => axiosService.get(urls.movies,{params:{page}}),
    getDetails: (id:number) => axiosService.get<IDetails>(`${urls.movie}/${id}`).then(value => value.data),
    getCredits: (id:number) => axiosService.get<ICredits>(`${urls.movie}/${id}/credits`).then(value => value.data),
    getSimilar: (id:number) => axiosService.get<ISimSearch>(`${urls.movie}/${id}/similar`).then(value => value.data),
    getByGenreId: (id:number,page:string) => axiosService.get<IMoviesGenre>(`${urls.movies}`,{params: {with_genres: id, page}}).then(value => value.data),
    getGenres:() => axiosService.get<IGenre>(urls.genre).then(value => value.data),
    getBySearch: (query:string) => axiosService.get<ISimSearch>(urls.search, {params:{query: query}}).then(value => value.data)
}

export {moviesService}
