import {AxiosRes, axiosService} from "./axios.service";
import {urls} from "../constants";
import {IDetails, IMovies} from "../interface";


const moviesService = {
    getMovies:():AxiosRes<IMovies> => axiosService.get(urls.movies),
    getDetails: (id:number) => axiosService.get<IDetails>(`${urls.movie}/${id}`)
}
//    getAll: (): AxiosRes<ICar[]> => axiosService.get(urls.cars),
//     create: (car: ICar): AxiosRes<ICar> => axiosService.post(urls.cars, car),
//     getById: (id: number): AxiosRes<ICar> => axiosService.get(`${urls.cars}/${id}`)


export {moviesService}