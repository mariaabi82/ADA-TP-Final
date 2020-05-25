import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Card from './Card';
import CardS from './CardS';
import TrendingMovies from '../components/Trending/TrendingMovies';
import TrendingSeries from '../components/Trending/TrendingSeries';
import EachMovie from './EachMovie';
import EachSeries from './EachSeries';
import './HomeComp.css'
import styled from 'styled-components';
import { ArrowRight } from "@styled-icons/feather/ArrowRight";

const ArrowM = styled(ArrowRight)`
color: rgb(33, 150, 243);
height: 20px;
margin: 10px;
display: flex;
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

  useEffect(showMovies, [])
  useEffect(showSeries, [])

  console.log(movies)
  console.log(movies.slice(0,5))
  console.log(series)

  

 

    return (
        <Router>
        <div className="wrapper">
            <h2>Películas que son tendencia</h2><Link to="/trendingmovies"><ArrowM /></Link>
            <div className="contMovies">
          
                { movies.map((movie, i) => {
                return (
                <Link to={`/movies/${movie.title}`}>
                <Card key={i} className="card" movieName={movie.title} moviePoster={movie.backdrop_path} />
                </Link>
                )
            })
            };
            </div>
        </div>

        <div className="wrapperSeries">
            <h2>Series que son tendencia</h2><Link to="/trendingseries"><ArrowS /></Link>
            <div className="contSeries">
                { series.map((serie, i) =>  { 
                return (
                <Link to={`/series/${series.original_name}`}>
                <CardS key={i} className="cardS" seriesName={series.original_name} seriesPoster={series.backdrop_path} />
                </Link>
                )
            })
            };
            </div>
        </div>
        <Switch>
        <Route path="/trendingmovies" component={TrendingMovies}></Route>
        <Route path="/trendingseries" component={TrendingSeries}></Route>
        <Route path="/movies/:name" component={EachMovie}></Route>
        <Route path="/series/:name" component={EachSeries}></Route>
        </Switch>
        </Router>
    )
}

export default HomeComp;