import React, {useContext } from 'react';
import {GlobalContext} from '../context/GlobalState';

var movieRows =[]
var movie_Res =[]
var title = []

function MovieRows(props) {

    const {
        addMovieToWatchlist, 
        watchlist,
        } = useContext(GlobalContext);
    const check_Disability =(id)=>{

        let storedMovie = watchlist.find((o) => o.movie.id === id);
        let watchlistDisabled = storedMovie ? true : false
        //console.log(watchlistDisabled)
         return watchlistDisabled
  
    }

    const viewMovie=()=>{
        console.log("in view movie--"+props.movie.title)
        const url = "https://www.themoviedb.org/movie/"+props.movie.id
        window.open(url, "_blank");
    }
    
    

  const  movieInfo_newWindow=()=>{

            movieRows.forEach((movie)=>{
            let imgSrc = movie.poster_path
        
          
          //  console.log(movie.poster_path)

            const info = 
            "<table>"+
            "<tbody>"+
            "<tr>"+
        
            '<td><text><img src="' + imgSrc + '"></text></td>'+ 

            "<td>"+ "<h2>"+movie.title+"</h2>" + 
            "<p>"+movie.overview+"</p>"+
            "</td>" +
            

            "</tr>"+
            "</tbody>"+
            "</table>"+
            "<hr>"
            
            title.push(info)
        })
    }

  const  opennewWindow=()=>{
    
        var popwindow = window.open("", "_blank"); 
        popwindow.document.write( `<h1 className=recom-title>Recommendation Based On "${props.movie.title}"</h1>`)
        movieRows.forEach((movie)=>{
        let imgSrc = movie.poster_path
        
        //let button = <button onClick={this.viewReMovie}>view</button>
        //console.log(movie.poster_path)
        const info = 
        "<table>"+
        "<tbody>"+
        "<tr>"+
        
        '<td><text><img src="' + imgSrc + '"></text></td>'+ 

        "<td>"+ "<h2>"+movie.title+"</h2>" + 
        "<p>"+movie.overview+"</p>"+
        "</td>" +
            
        "</tr>"+
        "</tbody>"+
        "</table>"+
        "<hr>"
        popwindow.document.write(info);

      
        })
        
       
        title =[]

    }
   const getRecommendation = async()=>{
        try{
        
        const movie_id = props.movie.id
        let url =`https://api.themoviedb.org/3/movie/${movie_id}/recommendations?api_key=5958134e04ed9ecbbf6100cd3a582d3d`

        let response = await fetch(url)
       // console.log(response)
        const data = await response.json()
        //console.log(data)
        const results = data.results;
        movie_Res = results
       // console.log(results)
       // var movieRows =[]
            movieRows =[]
            results.forEach((movie) =>
            {
                movie.poster_path = "https://image.tmdb.org/t/p/w185" + movie.poster_path
                movie.title = movie.title
                movie.overview = movie.overview
                movieRows.push(movie)
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
            <table key ={props.movie.id}>
            <tbody>
                <tr>
                    <td>
                        {props.movie.poster_path ? (
                            <img alt ="poster" src ={props.movie.poster_path}/>
                        ) : (
                            <div className="filler-poster"></div>
                        )}
                    </td>
                    <td>
                        <h3 style={{marginLeft:"15px"}} > {props.movie.title} </h3>
                        <p style={{marginLeft:"15px", textAlign:"justify"}} > {props.movie.overview}</p>
                        <button className="btn" onClick={viewMovie} value="View"> View </button>
                        <button className="btn" onClick={getRecommendation} value="View"> Get Recommendation </button>
                        <button className="btn"
                        disabled={check_Disability(props.movie.id)}
                        onClick={()=>addMovieToWatchlist(props)}> Add To Watchlist </button>
                        
                    </td>
                </tr>
            </tbody>
            </table>
        </div>
    )
}

export default MovieRows
