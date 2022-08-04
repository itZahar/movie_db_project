export interface ICredits{
    id: number
    cast:ICreCust[]
}
export interface ICreCust {
    adult: boolean
    gender: number
    id: number
    known_for_department: string
    name: string
    original_name: string
    popularity: number
    profile_path: string
    cast_id: number
    character: string
    credit_id: string
    order:number
}

export interface IDetails{
    adult: boolean
    backdrop_path: string
    belongs_to_collection: {
        id: number
        name: string
        poster_path: string
        backdrop_path: string }|null,
    budget: number
    genres: IDetGenres[]
    homepage: string
    id: 616037,
    imdb_id: string
    original_language:string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    production_companies: IDetProdComp[]
    production_countries:IDetProdCountry[]
    release_date: Date|string
    revenue: number
    runtime:number
    spoken_languages: IDetLang
    status: string
    tagline: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
}
export interface IDetProdComp {
    id: number
    logo_path: null,
    name: string
    origin_country:string
}
export interface IDetProdCountry {
    iso_3166_1: string
    name: string
}
export interface IDetLang {
    english_name: string
    iso_639_1: string
    name: string
}
export interface IDetGenres {
    id: number
    name: string|any
}







export interface ISimSearch {
    page: number,
    results: ISimSearchRes[]
    total_pages: number
    total_results: number
}

export interface ISimSearchRes {
    adult: false,
    backdrop_path: string
    genre_ids: number[],
    id: number
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    release_date: Date|string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
}







export interface IGenre {
    genres: Igenres[]
}
export interface Igenres{
    id: number
    name: string
}