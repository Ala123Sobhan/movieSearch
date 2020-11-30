import React, { Component } from 'react'

export class Home extends Component {
    render() {
        return (
            <div class="info-container">
                
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
