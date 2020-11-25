import React, { Component } from 'react'

export class RemovieRow extends Component {
    render() {
        return (
            <div>
                <table key ={this.props.movie.id}>
            <tbody>
                <tr>
                    <td>
                     <img  src ={this.props.movie.poster_path} alt ="poster" />
                    </td>

                    <td>
                       <h3> {this.props.movie.title} </h3>
                       <p>{this.props.movie.overview}</p>
                    </td>
                </tr>
            </tbody>
        </table>
                
            </div>
        )
    }
}

export default RemovieRow
