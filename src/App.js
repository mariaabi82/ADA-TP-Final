import React, { useState, useEffect } from 'react';
import Card from './components/Card';
import CardS from './components/CardS';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import { Home } from '@styled-icons/feather/Home';
import { Video } from '@styled-icons/feather/Video';
import { Tv } from '@styled-icons/feather/Tv';
import { Search } from '@styled-icons/feather/Search';
//import { ArrowLeft } from "styled-icons/feather/ArrowLeft";
//import { ArrowRight } from "styled-icons/feather/ArrowRight";
//import { Imdb } from "styled-icons/fa-brands/Imdb";
//import { FacebookSquare } from "styled-icons/fa-brands/FacebookSquare";
//import { Twitter } from "styled-icons/fa-brands/Twitter";
//import { Instagram } from "styled-icons/fa-brands/Instagram";
//import { Link } from "styled-icons/fa-solid/Link" ;
//import { Star } from "styled-icons/material/Star";
//import { StarHalf } from "styled-icons/material/StarHalf";
//import { StarBorder } from "styled-icons/material/StarBorder" ; //estrellas

const HomeIcon = styled(Home)`
color: rgb(220, 221, 222);
height: 20px;
margin: 10px;
`
const VideoIcon = styled(Video)`
color: rgb(220, 221, 222);
height: 20px;
margin: 10px;
`
const TvIcon = styled(Tv)`
color: rgb(220, 221, 222);
height: 20px;
margin: 10px;
`
const SearchIcon = styled(Search)`
color: rgb(220, 221, 222);
height: 20px;
margin: 10px;
`

function App() {

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
  console.log(series)

 /*  const handleChange = e => {
    console.log(e.target.value)
    setSearch(e.target.value)
  }
  
  const searchEntertainment = () => {
    fetch(`https://api.themoviedb.org/3/${search}/multi?api_key=c6b30101367115868190fb5d2fcf4c4c&language=en-US&page=1&include_adult=false`)
      .then(res => res.json())
      .then(data => setEntertainment(data.results))
  
  } CMD ALT A*/

  


  return (
    
    <Router>
     <div className="App">
      <nav className="navBar">
        <Link to="/"><HomeIcon /></Link>
        <Link to="/allmovies"><VideoIcon /></Link>
        <Link to="/allseries"><TvIcon /></Link>
        <SearchIcon />
        <input type="text" placeholder="Búsqueda..." />
      </nav>
      <div className="wrapper">
        <h2>Películas que son tendencia</h2>
        <div className="contMovies">
          
          { movies.map((movie, i) => {
            
            return <Card key={i} className="card" movieName={movie.title} moviePoster={movie.backdrop_path} />
          })
          };
          
          
        </div>
      </div>
      <div className="wrapperSeries">
        <h2>Series que son tendencia</h2>
        <div className="contSeries">
          { series.map((serie, i) => {
            return <CardS key={i} className="cardS" serieName={serie.original_name} seriePoster={serie.backdrop_path} />
          })
          }
        </div>
      </div>
      
    </div>
    <Route exact path="/home" render={() => <h1>home</h1>}></Route>
    <Route exact path="/allmovies" render={() => <h1>all movies</h1>}></Route>
    <Route exact path="/allseries" render={() => <h1>all series</h1>}></Route>
    </Router>
  );
};

export default App;
