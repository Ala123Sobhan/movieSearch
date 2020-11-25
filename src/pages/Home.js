import React, { Component } from 'react'

export class Home extends Component {
    render() {
        return (
            <div>
                <table style={{
                    backgroundColor:"black",
                    display:"block",
                    color: "white",
                    paddingLeft:16
                }}>
                    <tbody>
                        <tr>
                            <td>
                                <img width="50"src="movie-icon.png" alt="app-logo"/>
                            </td>
                            <td width="2"/>
                            <td>
                              <h1>Movie123Search</h1>
                            </td>
                        </tr>
                    </tbody>
                </table>
               
            </div>
        )
    }
}

export default Home
