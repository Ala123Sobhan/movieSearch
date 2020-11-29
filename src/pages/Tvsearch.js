import React, { Component } from 'react'
import TvRow from "./TvRow"
import "../App.css"
export class Tvsearch extends Component {
    constructor(props) {
        super(props)
    
        this.state ={
            rows:[]
        }
    }

    handleChange=(event)=>{
        const searchTerm = event.target.value
        this.renderTvshowInfo(searchTerm)
    }
    renderTvshowInfo= async(searchTerm)=>{
        try{

           //for tv
           let url = "https://api.themoviedb.org/3/search/tv?api_key=5958134e04ed9ecbbf6100cd3a582d3d&query="+searchTerm
            
            let response = await fetch(url)
            const data = await response.json()
            const results = data.results;
           //console.log(results)


            var movieRows =[]
            results.forEach((tv) =>
            {
                
                tv.poster_path = "https://image.tmdb.org/t/p/w185"+ tv.poster_path
                //const movieRow = this.getMovieRows(movie)
                
                const movieRow = <TvRow key={tv.id} tv={tv}/>
                //console.log(movieRow)
                movieRows.push(movieRow)
                
            })
            this.setState({
                rows:movieRows
            })
        
        }catch(error){
            console.log(" here: "+error)
        }
    }

    render() {
        return (
            <div class="tvSearch-container">
                <h1 style={{fontFamily:"Montserrat", fontWeight:"bold"}}> TV Search </h1>
                <div>
                <input className="input"style={{
                    fontSize: 24,
                    display: "block",
                    width: "96%",
                    paddingTop: 8,
                    paddingBottom: 8,
                    paddingRight: 20,
                    marginRight: 10
                }}
                onChange={this.handleChange}
                placeholder="Enter a TV show...." />
                {this.state.rows}
                </div>
            </div>
        )
    }
}

export default Tvsearch
