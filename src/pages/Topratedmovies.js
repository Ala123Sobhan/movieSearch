import React, { Component } from 'react'
import MovieRows from "./MovieRows"
export class Topratedmovies extends Component {
    constructor(props) {
        super(props)
        this.state ={
            rows:[]
        }
        this.renderTopratedInfo()
    }

    
    renderTopratedInfo= async()=>{
        try{

            let url = "https://api.themoviedb.org/3/movie/top_rated?api_key=5958134e04ed9ecbbf6100cd3a582d3d&language=en-US&page=1"
            let response = await fetch(url)
            const data = await response.json()
            const results = data.results;
            //console.log(results)


            var movieRows =[]
            results.forEach((movie) =>
            {
                movie.poster_path = "https://image.tmdb.org/t/p/w185"+ movie.poster_path
                //const movieRow = this.getMovieRows(movie)
                const movieRow = <MovieRows key={movie.id} movie={movie}/>
               // console.log(movieRow)
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
                <h1 style={{paddingLeft:"10px",  fontFamily:"Montserrat"}}>Top Rated Movies</h1>
                {this.state.rows}
            </div>
        )
    }
}

export default Topratedmovies
