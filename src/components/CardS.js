import React from 'react';
import './CardS.css';

const CardS = ({ seriesName, seriesPoster }) => {
    function whatSeries() {
        console.log("hiciste click en " + seriesName)
    
      }

    return (
        <div className="cardS" onClick={whatSeries}>
           <div className="serieImg" style={{backgroundImage: `url(https://image.tmdb.org/t/p/w500${seriesPoster})`}}></div>
         <h2>{seriesName}</h2>     
        </div>
    )
}

export default CardS;