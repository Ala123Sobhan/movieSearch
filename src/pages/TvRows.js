import React, {useContext } from 'react';
import {GlobalContext} from '../context/GlobalState';

var movieRows =[]
var movie_Res =[]
var title = []
function TvRows(props) {

    const {
        addTvToWatchlist, 
        tv_watchlist,
      } = useContext(GlobalContext);

      const check_Disability =(id)=>{
     
      
        let storedMovie = tv_watchlist.find((o) => o.tv.id === id);
        let watchlistDisabled = storedMovie ? true : false
        //console.log(watchlistDisabled)
         return watchlistDisabled
  
    }


   
    const  viewTv=()=>{
        //onsole.log("in view movie--"+this.props.tv.name)
        const url = "https://www.themoviedb.org/tv/"+props.tv.id
        //window.location.href = url
        window.open( url, "_blank");
    }

    const movieInfo_newWindow=()=>{
        movieRows.forEach((tv)=>{
        let imgSrc = tv.poster_path
        const info = 
        "<table>"+
        "<tbody>"+
        "<tr>"+
        '<td><text><img src="' + imgSrc + '"></text></td>'+ 

        "<td>"+ "<h2>"+tv.name+"</h2>" + 
        "<p>"+tv.overview+"</p>"+
        "</td>" +
        

         "</tr>"+
         "</tbody>"+
         "</table>"+
          "<hr>"
         
        
        title.push(info)
     })

}

const opennewWindow=()=>{
  
       
       var popwindow = window.open("", "_blank"); 
       popwindow.document.write( `<h1 className=recom-title>Recommendation Based On "${props.tv.name}"</h1>`)

       movieRows.forEach((tv)=>{
       
       
        let imgSrc = tv.poster_path
       
       

        const info = 
        "<table>"+
        "<tbody>"+
        "<tr>"+
      
        '<td><text><img src="' + imgSrc + '"></text></td>'+ 

        "<td>"+ "<h2>"+tv.name+"</h2>" + 
         "<p>"+tv.overview+"</p>"+
         "</td>" +
        

         "</tr>"+
         "</tbody>"+
         "</table>"+
          "<hr>"
         
          popwindow.document.write(info);
       // title.push(info)
     })
     //  popwindow.document.write('<h1 className=recom-title>Recommendation Page</h1>'+title);

       title =[]
      

}

  const getRecommendation =async()=>{
       console.log("in get recom")
    try{
    
    const tv_id = props.tv.id
    let url =`https://api.themoviedb.org/3/tv/${tv_id}/recommendations?api_key=5958134e04ed9ecbbf6100cd3a582d3d`

    let response = await fetch(url)
    const data = await response.json()
    
    const results = data.results;
    movie_Res = results
    //console.log(results)

         
         movieRows =[]
        results.forEach((tv) =>
        {
            
            tv.poster_path = "https://image.tmdb.org/t/p/w185"+ tv.poster_path
            tv.name = tv.name
            tv.overview = tv.overview
           // const movieRow = <RemovieRow key ={movie.id} movie={movie}/>
               
          //  console.log(movie)
           
            movieRows.push(tv)
            
        })

       
         
        
       opennewWindow()
        

       movieRows= []
        
    }
    catch(error){
        console.log(error)
    }

}
    return (
        <div>
            <table key ={props.tv.id}>
             <tbody>
                 <tr>
                     <td>
                         <img alt ="poster" src ={props.tv.poster_path}/>
                     </td>
 
                    <td>
                        <h3> {props.tv.name} </h3>
                        <p>{props.tv.overview}</p>

                        <button className="btn" onClick={viewTv} value="View"> View </button>
                        <button className="btn" onClick={getRecommendation} value="View"> Get Recommendation </button>
                        <button className="btn"
                          disabled={check_Disability(props.tv.id)}
                         onClick={()=>addTvToWatchlist(props)}> Add To Watchlist </button>
                    </td>
                </tr>
            </tbody>
        </table>
            
        </div>
    )
}

export default TvRows
