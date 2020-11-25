import React, { Component } from 'react'
import MovieRow from "./MovieRow"
export class Popularmovies extends Component {
    constructor(props) {
        super(props)
    
        this.state ={
            rows:[]
        }
        this.renderPopularInfo()
    }

    
    renderPopularInfo= async()=>{
        try{
  
           let url = "https://api.themoviedb.org/3/movie/popular?api_key=5958134e04ed9ecbbf6100cd3a582d3d&language=en-US&page=1"
           let response = await fetch(url)
            const data = await response.json()
            const results = data.results;
            //console.log(results)


           var movieRows =[]
            results.forEach((movie) =>
            {
                movie.poster_path = "https://image.tmdb.org/t/p/w185"+ movie.poster_path
                //const movieRow = this.getMovieRows(movie)
                const movieRow = <MovieRow key={movie.id} movie={movie}/>
                console.log(movieRow)
                movieRows.push(movieRow)
                
            })
            this.setState({
                rows:movieRows
            })

           
           
        }catch(error){
            console.log(error)
        }
    }
   
    render() {
        return (
            <div>
                <h1>Poplular MOVIES</h1>
                 {this.state.rows}
            
            </div>
        )
    }
}


export default Popularmovies
