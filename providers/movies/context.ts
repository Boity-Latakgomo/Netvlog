
import { createContext } from 'react';
import { movieProps } from '../../pages/interfaces/movie';

//dto 


//state at first load time
export const INITIAL_STATE: IMovieStateContext = { }

//specifying the state 
export interface IMovieStateContext {
    readonly moviesFetched?: movieProps[];//IMovieDto[]
}

//specifying the action
export interface IMovieActionContext{
    fetchMovies?:() => void;//get movies
}

//initializing the state and the action 
export const MovieStateContext = createContext<IMovieStateContext>(INITIAL_STATE);
export const MovieActionContext = createContext<IMovieActionContext>({});

