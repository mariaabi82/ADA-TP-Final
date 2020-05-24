import React from 'react';
import './Series.css';

const Series = ({ serieName, seriePoster }) => {
    function whatSerie() {
        console.log("hiciste click en " + serieName)
        
      }

    return (
        <div className="series" onClick={whatSerie}>
           {/* <div className="serieImg" style={{backgroundImage: `url(https://image.tmdb.org/t/p/w500${seriePoster})`}}></div> */}
         <h2>{serieName}</h2>     
        </div>
    )
}

export default Series;