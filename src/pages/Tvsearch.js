import React, { Component } from 'react'
import TvRow from "./TvRow"
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
                console.log('tv poster path: '+tv.poster_path)
                //https://image.tmdb.org/t/p/w185/dPj3iAXq0A5L5kwpHh32j0iccY6.jpg
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
            <div>
                <h1>TV SEARCH</h1>
                <div>
               
               
               <input style={{
                   fontSize: 24,
                   display: "block",
                   width: "99%",
                   paddingTop: 8,
                   paddingBottom: 8,
                   paddingLeft: 16
               }}
               onChange={this.handleChange}
               placeholder="Enter a tv show...." />
               {this.state.rows}
              
            </div>
             
            </div>
        )
    }
}

export default Tvsearch
