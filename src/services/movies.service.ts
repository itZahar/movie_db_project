import {AxiosResponse, axiosService} from "./axios.service";
import {urls} from "../constants";
import {IMovie} from "../interface";

const moviesService = {
    getMovies:(page:number):AxiosResponse<IMovie[]>=> axiosService.get(urls.movies,{params:page}).then(value => value.data),
}

export {moviesService}