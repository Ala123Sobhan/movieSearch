import React, { Component } from 'react'
import MovieRow from "./MovieRow"
import MovieRows from "./MovieRows"
import "../App.css"

export class MovieSearch extends Component {
    
    constructor(props) {
        super(props)
        this.state ={
            rows:[]
        }

       //this.performSearch()
       //this.renderMovieInfo()
    }

    handleChange=(event)=>{
        const searchTerm = event.target.value
        this.renderMovieInfo(searchTerm)
    }
    getMovieRows =(obj)=>{
    
        return (
            <div><table key ={obj.id}>
            <tbody>
                <tr>
                    <td>
                    <img  src ={obj.poster_path} alt ="poster" />
                    </td>
                    <td>
                        <h3> {obj.title} </h3>
                        <p>{obj.overview}</p>
                    </td>
                </tr>
            </tbody>
        </table></div>
        )
    }

    renderMovieInfo= async(searchTerm)=>{
        try{
        //for movies & tv
        let url = "https://api.themoviedb.org/3/search/multi?api_key=5958134e04ed9ecbbf6100cd3a582d3d&query="+searchTerm

        let response = await fetch(url)
            const data = await response.json()
            const results = data.results;
           // console.log(results)

        var movieRows =[]
            results.forEach((movie) =>
            {
                movie.poster_path = "https://image.tmdb.org/t/p/w185"+ movie.poster_path
                //const movieRow = this.getMovieRows(movie)
               // const movieRow = <MovieRow key={movie.id} movie={movie}/>
               const movieRow = <MovieRows key={movie.id} movie={movie}/>
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
            <div class="movieSearch-container">
                <h1 style={{paddingLeft:"10px",  fontFamily:"Montserrat"}}>Movie Search</h1>
                <input className ="input" style={{
                    fontSize: 24,
                    display: "block",
                    width: "95%",
                    paddingTop: 8,
                    paddingBottom: 8,
                    paddingLeft: 20,
                    paddingRight: 20,
                    marginLeft: 10,
                    marginRight: 10
                }}
                onChange={this.handleChange}
                placeholder="Enter a movie...." />
                {this.state.rows}
            </div>
        )
    }
}

export default MovieSearch
