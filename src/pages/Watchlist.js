import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

var list_title =[]
export const Watchlist = () => {
   const {watchlist} = useContext(GlobalContext);

    console.log(watchlist)

    {watchlist.forEach((list)=>{
       list_title.push(list.tv.name)
     })}
     //console.log(list_title)
    
     watchlist.forEach((list)=>{
         console.log(list.tv.name)
     })

    return (
        <div>
            <h1 style={{fontSize:"60px"}}>Watchlist Page</h1>
            {
               watchlist.map((list, i)=>(
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