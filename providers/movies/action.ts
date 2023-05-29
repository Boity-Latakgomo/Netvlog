import { createAction } from 'redux-actions';
import {  IMovieStateContext } from './context';
import { movieProps } from '../../pages/interfaces/movie';



//specifies what action will be executed
//reference for an action
export enum MovieActionEnum {
    fetchMoviesRequest = 'FETCH_MOVIES_REQUEST',
    userRatedMovieRequest='USERRATED_MOVIE',
}

//must match the variable in interface state context (movieCreated)
//we are creating an action here
export const fetchMoviesRequestAction = createAction<IMovieStateContext,movieProps[]>(MovieActionEnum.fetchMoviesRequest, (moviesFetched) => ({moviesFetched}));
export const userRatedMovieRequestAction = createAction<IMovieStateContext, movieProps>(MovieActionEnum.userRatedMovieRequest,(ratedMovie)=>({ratedMovie}));
