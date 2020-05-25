import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import HomeComp from './components/HomeComp';
import Movies from './components/Movies';
import Series from './components/Series';
import './App.css';
import styled from 'styled-components';
import { Home } from '@styled-icons/feather/Home';
import { Video } from '@styled-icons/feather/Video';
import { Tv } from '@styled-icons/feather/Tv';
import { Search } from '@styled-icons/feather/Search';
//import { ArrowLeft } from "styled-icons/feather/ArrowLeft";
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
height: 35px;
margin: 15px;
active: rgb(33, 150, 243);
`
const VideoIcon = styled(Video)`
color: rgb(220, 221, 222);
height: 35px;
margin: 15px;
active: rgb(33, 150, 243);
`
const TvIcon = styled(Tv)`
color: rgb(220, 221, 222);
height: 35px;
margin: 15px;
::active: rgb(33, 150, 243);
`
const SearchIcon = styled(Search)`
color: rgb(220, 221, 222);
height: 35px;
margin: 15px;
::active: rgb(33, 150, 243);
`
/* const [search, setSearch] = useState('');
const handleClick = (input.value) => {search}
console.log(input.value)
const handleClick = e => {
  console.log(e.target.value)
  setSearch(e.target.value)
}
const searchEntertainment = () => {
  fetch(`https://api.themoviedb.org/3/${search}/multi?api_key=c6b30101367115868190fb5d2fcf4c4c&language=en-US&page=1&include_adult=false`)
    .then(res => res.json())
    .then(data => setsearchEntertainment(data.results))

}   */




function App() {
  console.log("Hola")

  
  
return  (
  <Router>
    <div className="App">
      <nav className="navBar">
        <Link to="/"><HomeIcon /></Link>
        <Link to="/movies"><VideoIcon /></Link>
        <Link to="/series"><TvIcon /></Link>
        <SearchIcon />
        <input type="text" placeholder="Búsqueda..." />
      </nav>
    
      <Switch>
      <Route exact path="/" component={HomeComp}></Route>
      <Route path="/movies" component={Movies}></Route>
      <Route path="/series" component={Series}></Route>
      </Switch>

    </div> 
  </Router>
    
  );
};

export default App;
