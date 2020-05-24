import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Card from './Card';
import CardS from './CardS';
import Movies from './Movies';
import Series from './Series';
import TrendingMovies from '../components/Trending/TrendingMovies';
import TrendingSeries from '../components/Trending/TrendingSeries';
import './HomeComp.css'
import styled from 'styled-components';
import { ArrowRight } from "@styled-icons/feather/ArrowRight";

const ArrowM = styled(ArrowRight)`
color: rgb(33, 150, 243);
height: 20px;
margin: 10px;
`
const ArrowS = styled(ArrowRight)`
color: rgb(33, 150, 243);
height: 20px;
margin: 10px;
`

function HomeComp () {
    console.log("Hola")
    const [movies, setMovies] = useState([]);
    const [series, setSeries] = useState([]);
    const [search, setSearch] = useState('');

    const showMovies = () => {
  fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=c6b30101367115868190fb5d2fcf4c4c')
    .then(res => res.json())
    .then(data => setMovies(data.results))
  }
    const showSeries = () => {
    fetch('https://api.themoviedb.org/3/trending/tv/week?api_key=c6b30101367115868190fb5d2fcf4c4c')
      .then(res => res.json())
      .then(data => setSeries(data.results))
  }

  useEffect(showMovies, [5])
  useEffect(showSeries, [5])

  console.log(movies)
  console.log(movies.slice(0,5))
  console.log(series)

  /* const handleChange = e => {
    console.log(e.target.value)
    setSearch(e.target.value)
  }
  
  const searchEntertainment = () => {
    fetch(`https://api.themoviedb.org/3/${search}/multi?api_key=c6b30101367115868190fb5d2fcf4c4c&language=en-US&page=1&include_adult=false`)
      .then(res => res.json())
      .then(data => setEntertainment(data.results))
  
  }  */
  // CMD ALT A*/

 

    return (
        <Router>
        <div className="wrapper">
            <h2>Películas que son tendencia</h2><Link ><ArrowM /></Link>
            <div className="contMovies">
          
                { movies.map((movie, i) => {
            
                return <Card key={i} className="card" movieName={movie.title} moviePoster={movie.backdrop_path} />
            })
            };
            </div>
        </div>

        <div className="wrapperSeries">
            <h2>Series que son tendencia</h2><Link ><ArrowS /></Link>
            <div className="contSeries">
                { series.map((serie, i) => {
                return <CardS key={i} className="cardS" serieName={serie.original_name} seriePoster={serie.backdrop_path} />
            })
            };
            </div>
        </div>
        <Route exact path="/trendingmovies" component={TrendingMovies}></Route>
        <Route exact path="/trendingseries" component={TrendingSeries}></Route> 
        </Router>
    )
}

export default HomeComp;