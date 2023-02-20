import { axiosService} from "./axios.service";
import {urls} from "../constants";
import {ICredits, IDetails, IGenre,ISimSearchGenre} from "../interface";


const moviesService = {
    getMovies:(page:string|null) => axiosService.get<ISimSearchGenre>(urls.movies,{params:{page}}).then((value) => value.data),
    getDetails: (id:number) => axiosService.get<IDetails>(`${urls.movie}/${id}`).then(value => value.data),
    getCredits: (id:number) => axiosService.get<ICredits>(`${urls.movie}/${id}/credits`).then(value => value.data),
    getSimilar: (id:number) => axiosService.get<ISimSearchGenre>(`${urls.movie}/${id}/similar`).then(value => value.data),
    getByGenreId: (id:number,page:string|null) => axiosService.get<ISimSearchGenre>(`${urls.movies}`,{params: {with_genres: id, page}}).then(value => value.data),
    getGenres:() => axiosService.get<IGenre>(urls.genre).then(value => value.data),
    getBySearch: (query:string) => axiosService.get<ISimSearchGenre>(urls.search, {params:{query: query}}).then(value => value.data)
}

export {moviesService}
