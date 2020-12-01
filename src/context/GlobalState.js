import React, {createContext, useReducer, useEffect} from 'react';
import AppReducer from './AppReducer';
// initial state

const initialState = {
    watchlist: localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist"))
    : [],
    tv_watchlist: localStorage.getItem("tv_watchlist")
    ? JSON.parse(localStorage.getItem("tv_watchlist"))
    : [],
};

// context

export const GlobalContext = createContext(initialState);

// provider component
export const GlobalProvider = props => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(() => {
        localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
        localStorage.setItem("tv_watchlist", JSON.stringify(state.tv_watchlist));
    }, [state]);

// actions
    const addMovieToWatchlist = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
    };

    const removeMovieFromWatchList = (id) => {
        
    
        dispatch({type: "REMOVE_MOVIE_FROM_WATCHLIST", payload:id});
        
    }


  const addTvToWatchlist = (tv) => {
       
    dispatch({ type: "ADD_TV_TO_WATCHLIST", payload: tv });
  };


    return(
        <GlobalContext.Provider 
        value={{watchlist: state.watchlist, 
                tv_watchlist: state.tv_watchlist,
                addMovieToWatchlist:addMovieToWatchlist,
                addTvToWatchlist:addTvToWatchlist,
                removeMovieFromWatchList:removeMovieFromWatchList,
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}