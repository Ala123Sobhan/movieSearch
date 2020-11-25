import React, { Component } from 'react'

export class Recommendation extends Component {


    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    showTable =()=>{
        const movies = this.props.movie
        
        movies.array.forEach(movie => {
        <div>
        <table key ={movie.id}>
        <tbody>
            <tr>
                <td>
                    <img alt ="poster" src ={movie.poster_path}/>
                </td>

                <td>
                   <h3> {movie.title} </h3>
                   <p>{movie.overview}</p>
                   <input type="button" onClick={this.viewMovie} value="View" />
                </td>
            </tr>
        </tbody>
    </table>
    </div>
        });
        
    }
    render() {
        console.log("IN RECOM TAB")
        return (
            <div>
                <h2>In recommendation page</h2>
                 
               
            </div>
        )
    }
}

export default Recommendation
