import React, { useContext } from "react";
//import { MovieCard } from "../components/MovieCard";
import { GlobalContext } from "../context/GlobalState";

//var list_title =[]
export const Watchlist = () => {
const {watchlist,tv_watchlist} = useContext(GlobalContext);

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
        <div class="watchlist-container">
            <h1 style={{fontSize:"60px"}}>Watchlist Page</h1>
            <h2>Movie Watchlist</h2>
            <div className="movie-grid">
            {
                watchlist.map((list, i)=>(
                    <div key ={i}>
                        <div class="card-container">
                            <img src ={list.movie.poster_path} alt="poster"/>
                            <div class="btn-rows">
                                <button class="ctrl-btn"> Delete </button>
                            </div>
                        </div>
                    </div>
                ))
            }
            </div>
            
            <h2>TV Watchlist</h2>
            <div className="tv-grid">
            {
                tv_watchlist.map((list, i)=>(
                    <div key ={i}>
                    <div class="card-container">
                        <img src ={list.tv.poster_path} alt="poster"></img>
                        <div class="btn-rows">
                            <button class="ctrl-btn"> Delete </button>
                        </div>
                    </div>
                    </div>
                ))
            }
            </div>
            
        </div>
    )
}

export default Watchlist