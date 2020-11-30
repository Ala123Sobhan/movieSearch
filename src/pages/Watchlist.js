import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

//var list_title =[]
export const Watchlist = () => {
   const {watchlist,tv_watchlist} = useContext(GlobalContext);

    console.log(watchlist)
    console.log("tv-"+tv_watchlist.tv)

   /* {tv_watchlist.forEach((list)=>{
       list_title.push(list.tv.name)
     })}
     console.log(list_title)
    
    tv_watchlist.forEach((list)=>{
         console.log(list.tv.name)
     })
*/
    return (
        <div>
            <h1 style={{fontSize:"60px"}}>Watchlist Page</h1>
            <h2>Movie Watchlist</h2>
            {
               watchlist.map((list, i)=>(
                   <div key ={i}>
                   <h3 >{list.movie.title}</h3>
                   <img src ={list.movie.poster_path} alt="poster"/>
                   <hr/>
                   </div>
                ))

            }
             
            <h2>TV Watchlist</h2>
            {
                 tv_watchlist.map((list, i)=>(
                    <div key ={i}>
                    <h3 >{list.tv.name}</h3>
                    <img src ={list.tv.poster_path} alt="poster"/>
                    <hr/>
                    </div>
                 ))
            }
            
        </div>
    )
}

export default Watchlist