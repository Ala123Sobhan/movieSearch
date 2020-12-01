import React, { Component } from 'react'

export class Home extends Component {
    render() {
        return (
            <div className="info-container">
                
                <div className="pageInfo-desc">
                    <h2 className="pageInfo-title"> Welcome to the Movie123Search Website!</h2>
                    <p className="pageInfo-text">Our website can be used to look  up your favorite movies, and tv shows!
                        Our data is used by the TMDB Api service, so you can look up from
                        classics, to the next big hits in seconds! You will be able to add your favourite movies and tv shows to the watchlist and keep track of them!!
                    </p>
                </div>
            </div>
        )
    }
}

export default Home
