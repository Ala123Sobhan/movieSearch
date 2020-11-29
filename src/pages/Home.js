import React, { Component } from 'react'

export class Home extends Component {
    render() {
        return (
            <div class="info-container">
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

                <div class="pageInfo-desc">
                    <h2 class="pageInfo-title"> Welcome to the Movie123Search Page!</h2>
                    <p class="pageInfo-text">Our page can be used to look  up your favorite moveis, and TV shows!
                        Our data is used by the TMDB Api service, so you can look up from
                        classics, to the next big hits in seconds!
                    </p>
                </div>
            </div>
        )
    }
}

export default Home
