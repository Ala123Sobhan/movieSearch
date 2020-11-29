import React, { Component } from 'react'
var title =[]
export class NewPageforRe extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            
        }
    }

    showTable =()=>{
        //console.log('in show table')
        const movies = this.props.movie
        
        movies.forEach(movie => {
    
        
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
   
        });
        
    }
    render() {
        console.log("IN RECOM TAB")
        return (
            <div>
                  
             
                <h2>In recommendation page</h2>
                {this.showTable()}
                 
               </div>
           
        )
            
        
    }
}

export default NewPageforRe
