import React from 'react';
import './AllMovies.css';

const Card = ({ movieName, moviePoster}) => {
    function whatMovie() {
        console.log("hiciste click en " + movieName)
        
    
      }

    return (
        <div className="card" onClick={whatMovie}>
           <div className="movieImg" style={{backgroundImage: `url(https://image.tmdb.org/t/p/w500${moviePoster})`}}></div>
         <h2>{movieName}</h2>     
        </div>
    )
}

export default Card;