import { MovieActionEnum } from "./action";
import { IMovieStateContext } from "./context"

//update state for each action and destructure and spread
export function MovieReducer(incomingState: IMovieStateContext, action: ReduxActions.Action<IMovieStateContext>): IMovieStateContext{
    const {type, payload} = action;

    switch (type) {
       
        case MovieActionEnum.fetchMoviesRequest:
            return {...incomingState,...payload};

        default:
            return incomingState;
    }
}

