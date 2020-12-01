import React, { useContext } from "react";
//import { MovieCard } from "../components/MovieCard";
import { GlobalContext } from "../context/GlobalState";

//var list_title =[]
export const Watchlist = () => {
const {watchlist,tv_watchlist, removeMovieFromWatchList, removeTvFromWatchList} = useContext(GlobalContext);

    //console.log(watchlist)
   // console.log("tv-"+tv_watchlist)
    /* {tv_watchlist.forEach((list)=>{
        list_title.push(list.tv.name)
    })}
    console.log(list_title)
    tv_watchlist.forEach((list)=>{
    console.log(list.tv.name)
    })
*/
   
    return (
        <div className="watchlist-container">
            <h1 style={{fontSize:"60px"}}>Watchlist Page</h1>
            <h2>Movie Watchlist</h2>
            {watchlist.length > 0 ? (
            <div className="movie-grid">
            {  watchlist.map((list, i)=>(
                    <div key ={i}>
                        <div className="card-container">
                            <img src ={list.movie.poster_path} alt="poster"/>
                            <div className="btn-rows">
                                <button className="ctrl-btn"
                                onClick={() =>   removeMovieFromWatchList(list.movie.id)}> Delete </button>
                            </div>
                        </div>
                    </div>
                ))
            }
            </div>):(
                <h4>No movies in your watchlist yet. Add some!</h4>
            )
        }
            
            <h2>TV Watchlist</h2>

            {tv_watchlist.length > 0 ? (
            <div className="tv-grid">
            {
                 tv_watchlist.map((list, i)=>(
                    <div key ={i}>
                    <div className="card-container">
                        <img src ={list.tv.poster_path} alt="poster"></img>
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