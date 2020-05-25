import React, { useState, useEffect } from 'react';
import './EachMovie.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

function EachMovie () {
    console.log("Estamos en EachMovie")
    return (
        <div className="eachmovie">Estás en Each Movie</div>

    )
}

export default EachMovie;