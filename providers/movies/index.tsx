import { useContext, useEffect, useReducer } from "react";
import { MovieReducer } from "./reducer";
import { INITIAL_STATE, MovieActionContext, MovieStateContext } from "./context";
import { useGet } from "restful-react";
import { fetchMoviesRequestAction } from "./action";

const MovieProvider = ({ children }) => {
    const [state, dispatch] = useReducer(MovieReducer, INITIAL_STATE);
    
    const { data ,refetch:getMoviesHttp} = useGet({
        path: 'Movie/GetAll' ,
    });
    
    useEffect(()=>{
        if(data){
            dispatch(fetchMoviesRequestAction(data.result));
        }
    },[data])
    
    const fetchMovies = async () => {
            getMoviesHttp();
    }
    
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