import { createAction } from 'redux-actions';
import { IMovieDto, IMovieStateContext } from './context';

//specifies what action will be executed
//reference for an action
export enum MovieActionEnum {
    fetchMoviesRequest = 'FETCH_MOVIES_REQUEST',
}

//must match the variable in interface state context (movieCreated)
//we are creating an action here
export const fetchMoviesRequestAction = createAction<IMovieStateContext, Array<IMovieDto>>(MovieActionEnum.fetchMoviesRequest, (fetchMovies) => ({fetchMovies}));
