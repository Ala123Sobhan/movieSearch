import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";


export const Watchlist = () => {
const {watchlist,tv_watchlist, removeMovieFromWatchList, removeTvFromWatchList} = useContext(GlobalContext);

   
    return (
        <div className="watchlist-container">
            <h1>Movie Watchlist</h1>
            {watchlist.length > 0 ? (
            <div className="movie-grid">
            {  watchlist.map((list, i)=>(
                    <div key ={i}>
                        <div className="card-container">
                            {list.movie.poster_path === "https://image.tmdb.org/t/p/w185undefined" || 
                        list.movie.poster_path === "https://image.tmdb.org/t/p/w185null" ? (
                            <div className="filler-poster"></div>):(
                            <img src ={list.movie.poster_path} alt="poster"/>
                            )}
                            <div className="btn-rows">
                                <button className="ctrl-btn"
                                onClick={() => removeMovieFromWatchList(list.movie.id)}> Delete </button>
                            </div>
                        </div>
                    </div>
                ))
            }
            </div>):(
                <h4>No movies in your watchlist yet. Add some!</h4>
            )
        }
            
            <h1>TV Watchlist</h1>

            {tv_watchlist.length > 0 ? (
            <div className="tv-grid">
            {
                tv_watchlist.map((list, i)=>(
                    <div key ={i}>
                    <div className="card-container">
                      {list.tv.poster_path === "https://image.tmdb.org/t/p/w185undefined" || 
                        list.tv.poster_path === "https://image.tmdb.org/t/p/w185null" ? (
                            <div className="filler-poster"></div>):(
                            <img src ={list.tv.poster_path} alt="poster"/>
                            )}
                        <div className="btn-rows">
                            <button className="ctrl-btn"
                            onClick={() =>removeTvFromWatchList(list.tv.id)} > Delete </button>
                        </div>
                    </div>
                    </div>
                ))
            }
            </div>):(
                <h4>No tv shows in your watchlist yet. Add some!</h4>
            )
        }
        </div>
    )
}

export default Watchlist