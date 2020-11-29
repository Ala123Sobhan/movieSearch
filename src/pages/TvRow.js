import React, { Component} from 'react';
import {useContext } from 'react';
import {GlobalContext} from '../context/GlobalState';
import NewPageforRe from "./NewPageforRe";
import RemovieRow from './RemovieRow';
import "../App.css";

var movieRows =[]
var movie_Res =[]
var title = []

export class TvRow extends Component {
    
    constructor(props) {
        super(props)
        
        this.state = {
             rows: [],
             r_success: false
        }
    }

    
    viewTv=()=>{
        //onsole.log("in view movie--"+this.props.tv.name)
        const url = "https://www.themoviedb.org/tv/"+this.props.tv.id
        //window.location.href = url
        window.open( url, "_blank");
    }

    movieInfo_newWindow=()=>{
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
   
    opennewWindow=()=>{
        
       
       
       
       // var popwindow = window.open("","Recommended Movies", "_blank");
       /* popwindow.postMessage({"movieRows":this.state.rows}, 
           'http://localhost:3001/recommendation');*/
         
         
          // console.log("MOVIE ROWS---"+movieRows)
         //  const windowInfo = movieRows.length

          // var movie_c = movie_Res[0]
          
           // const res_m =[]


           
           //this.movieInfo_newWindow()
           
           var popwindow = window.open("", "_blank"); 
           popwindow.document.write( '<h1 className=recom-title>Recommendation Page</h1>')
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

       getRecommendation =async()=>{
           
        try{
        
        const tv_id = this.props.tv.id
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
        //console.log(this.props)
        return (
            <div>
                 <table key ={this.props.tv.id}>
             <tbody>
                 <tr>
                     <td>
                         <img alt ="poster" src ={this.props.tv.poster_path}/>
                     </td>
 
                    <td>
                        <h3> {this.props.tv.name} </h3>
                        <p>{this.props.tv.overview}</p>
                        <input type="button" onClick={this.viewTv} value="View" />
                        <input type="button" onClick={this.getRecommendation} value="Get Recommendation"/>
                    
                    
                    </td>
                </tr>
            </tbody>
        </table>
            </div>
        )
    }
}

export default TvRow
