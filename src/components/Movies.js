import React from 'react';
import './Movies.css';

const Movies = ({ movieName, moviePoster}) => {
    function whatMovie() {
        console.log("hiciste click en " + movieName)
        
    
      }

    return (
        <div className="movies" onClick={whatMovie}>
           {/* <div className="movieImg" style={{backgroundImage: `url(https://image.tmdb.org/t/p/w500${moviePoster})`}}></div> */}
         <h2>{movieName}</h2>     
        </div>
    )
}

export default Movies;