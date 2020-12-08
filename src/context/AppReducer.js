const AppReducer = (state, action) => {
    switch(action.type){
        case "ADD_MOVIE_TO_WATCHLIST":
        return {
            ...state,
            watchlist:[action.payload, ...state.watchlist],
        }
        case "ADD_TV_TO_WATCHLIST":
        return {
            ...state,
            tv_watchlist:[action.payload, ...state.tv_watchlist],
        }
        case "REMOVE_MOVIE_FROM_WATCHLIST":
            return {
              ...state,
              watchlist: state.watchlist.filter((list) => list.movie.id !== action.payload
              ),
            };

        case "REMOVE_MOVIE_FROM_TV_WATCHLIST":
            return {
                ...state,
                tv_watchlist: state.tv_watchlist.filter((list) => list.tv.id !== action.payload
                ),
              };

        default:
            return state;
    }
};

export default AppReducer