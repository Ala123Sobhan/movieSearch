import React, { Component } from 'react'
import NewPageforRe from "./NewPageforRe"
import RemovieRow from './RemovieRow'

var movieRows =[]
var movie_Res =[]
var title = []
export class MovieRow extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            rows: [],
            r_success: false
        }
    }
    
    viewMovie=()=>{
        console.log("in view movie--"+this.props.movie.title)
        const url = "https://www.themoviedb.org/movie/"+this.props.movie.id
        //window.location.href = url
        window.open(url, "_blank");
    }
    
    viewReMovie=(id)=>{
    console.log("movie id --"+id)
    const url = "https://www.themoviedb.org/movie/"+id
      //window.location.href = url
     // window.open( url, "_blank");

    }

    movieInfo_newWindow=()=>{

            movieRows.forEach((movie)=>{
            let imgSrc = movie.poster_path
        
            //let button = <button onClick={this.viewReMovie}>view</button>
            console.log(movie.poster_path)

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

    opennewWindow=()=>{
        // var popwindow = window.open("","Recommended Movies", "_blank");
        /* popwindow.postMessage({"movieRows":this.state.rows}, 
        'http://localhost:3001/recommendation');*/
        
          // console.log("MOVIE ROWS---"+movieRows)
         //  const windowInfo = movieRows.length
        // var movie_c = movie_Res[0]
        // const res_m =[]
        // this.movieInfo_newWindow()
        var popwindow = window.open("", "_blank"); 
        popwindow.document.write("<h1>Recommendation Page</h1>");
        movieRows.forEach((movie)=>{
        let imgSrc = movie.poster_path
        
        //let button = <button onClick={this.viewReMovie}>view</button>
        console.log(movie.poster_path)
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

        //title.push(info)
        })
        
        //   var popwindow = window.open("", "_blank"); 
        //popwindow.document.write("<h1>Recommendation Page</h1>"+title);

        title =[]

    }
    getRecommendation =async()=>{
        try{
        
        const movie_id = this.props.movie.id
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
                movie.poster_path = "https://image.tmdb.org/t/p/w185"+ movie.poster_path
                movie.title = movie.title
                movie.overview = movie.overview
               // const movieRow = <RemovieRow key ={movie.id} movie={movie}/>
              //  console.log(movie)
                movieRows.push(movie)
                
            })
            this.state.r_success = true
            this.setState({
                rows:movieRows
            })
            
        this.opennewWindow()
            movieRows= []

        }
        catch(error){
            console.log(error)
        }
    }
    
    render() {
        return (
            <div>
            <table key ={this.props.movie.id}>
            <tbody>
                <tr>
                    <td>
                        <img alt ="poster" src ={this.props.movie.poster_path}/>
                    </td>
                    <td>
                        <h3> {this.props.movie.title} </h3>
                        <p>{this.props.movie.overview}</p>
                        <buttons className="btn" onClick={this.viewMovie} value="View"> View </buttons>
                        <buttons className="btn" onClick={this.getRecommendation} value="View"> Get Recommendation </buttons>
                    </td>
                </tr>
            </tbody>
            </table>
            </div>
        )
    }
}

export default MovieRow
