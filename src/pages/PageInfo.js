import React from 'react'
import Watchlist from "./Watchlist"
import {Switch, Route} from "react-router-dom"
import MovieSearch from './MovieSearch'
import Watched from './Watched'
import Tvsearch from './Tvsearch'
import Topratedmovies from './Topratedmovies'
import Popularmovies from './Popularmovies'
import Home from './Home'

function PageInfo() {
    return (
        <div >
          <Switch>
            <Route path="/tvsearch"> < Tvsearch/> </Route>
            <Route path="/topratedmovies"> <Topratedmovies /> </Route>
            <Route path="/popularmovies"> < Popularmovies/> </Route>
            <Route path="/watchlist"> <Watchlist/> </Route>
            <Route path="/moviesearch"> < MovieSearch/> </Route>
            {/* <Route path="/watched"> < Watched/> </Route> */}
            <Route path="/"> < Home/> </Route>
          </Switch>
        </div>
    )
}

export default PageInfo