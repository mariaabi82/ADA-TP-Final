import React from 'react';
import './CardS.css';

const CardS = ({ serieName, seriePoster }) => {
    function whatSerie() {
        console.log("hiciste click en " + serieName)
    
      }

    return (
        <div className="cardS" onClick={whatSerie}>
           {/* <div className="serieImg" style={{backgroundImage: `url(https://image.tmdb.org/t/p/w500${seriePoster})`}}></div> */}
         <h2>{serieName}</h2>     
        </div>
    )
}

export default CardS;