
import { createContext } from 'react';

//dto 
export interface IMovieDto {
    title: string,
    duration: string,
    starring: string,
    genre: string,
    id?: string,
    picture?:string,
}

//state at first load time
export const INITIAL_STATE: IMovieStateContext = { }

//specifying the state 
export interface IMovieStateContext {
    readonly fetchMovies?: Array<IMovieDto>;//IMovieDto[]
}

//specifying the action
export interface IMovieActionContext{
    fetchMovies?:() => void;//get movies
}

//initializing the state and the action 
export const MovieStateContext = createContext<IMovieStateContext>(INITIAL_STATE);
export const MovieActionContext = createContext<IMovieActionContext>({});

