export default (state, action) => {
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

        default:
            return state;
    }
};