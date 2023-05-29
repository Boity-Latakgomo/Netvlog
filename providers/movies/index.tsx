import { useContext, useEffect, useReducer } from "react";
import { MovieReducer } from "./reducer";
import { INITIAL_STATE, MovieActionContext, MovieStateContext } from "./context";
import { useGet,useMutate } from "restful-react";
import { fetchMoviesRequestAction, userRatedMovieRequestAction } from "./action";
import { movieProps } from "../../pages/interfaces/movie";

const MovieProvider = ({ children }) => {
    const [state, dispatch] = useReducer(MovieReducer, INITIAL_STATE);
    
    const { data ,refetch:getMoviesHttp} = useGet({
        path: 'Movie/GetAll' ,
    });
    
    useEffect(()=>{
        if(data){
            dispatch(fetchMoviesRequestAction(data.result));
            console.log('all movies::', data.result)
        }
    },[data])
    
    const fetchMovies = () => {
            getMoviesHttp();
    }

  //Rating
    const {mutate: rateHttp} = useMutate({
        verb: 'POST',
        path: `Movie/AddRating`,
      });

    const rateMovie = async (payload: movieProps) => {
        dispatch(userRatedMovieRequestAction(payload));
        rateHttp(payload)
      };




    return (
        <MovieStateContext.Provider value={state}>
            <MovieActionContext.Provider
                value={{
                    fetchMovies,
                }}
            >
                {children}
            </MovieActionContext.Provider>
        </MovieStateContext.Provider>
    );
};

function useMovieState() {
    const context = useContext(MovieStateContext);
    if (!context) {
        throw new Error('useMovieState must be used within a MovieProvider');
    }
    return context;
}

function useMovieAction() {
    const context = useContext(MovieActionContext);
    if (context === undefined) {
        throw new Error('useMovieState must be used within a MovieProvider');
    }
    return context;
}

function useMovie() {
    return {
        ...useMovieState(),
        ...useMovieAction(),
    };
}
export { MovieProvider, useMovie };
    function createMovieRequestAction(result: any): import("redux-actions").Action<import("./context").IMovieStateContext> {
        throw new Error('Function not implemented.');
    }