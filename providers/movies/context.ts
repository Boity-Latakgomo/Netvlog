
import { createContext } from 'react';
import { movieProps } from '../../pages/interfaces/movie';

//dto 


//state at first load time
export const INITIAL_STATE: IMovieStateContext = { }

//specifying the state 
export interface IMovieStateContext {
    readonly moviesFetched?: movieProps[];//IMovieDto[]
    readonly ratedMovie?:movieProps;

}

//specifying the action
export interface IMovieActionContext{
    fetchMovies?:() => void;//get movies
    rateMovie?:(payload:movieProps) => void;

}

//initializing the state and the action 
export const MovieStateContext = createContext<IMovieStateContext>(INITIAL_STATE);
export const MovieActionContext = createContext<IMovieActionContext>({});

