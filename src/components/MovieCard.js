import React from 'react'

export const MovieCard = (movie, type) => {
    return (
        <div className="movie-card">
            <div className="overlay"></div>
            
                <img src={"https://image.tmdb.org/t/p/w185"+ movie.poster_path}
                alt={`movie.title = movie.title`}
                />
            
        </div>
    )
}
