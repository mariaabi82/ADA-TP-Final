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
height: 20px;
margin: 10px;
active: rgb(33, 150, 243);
`
const VideoIcon = styled(Video)`
color: rgb(220, 221, 222);
height: 20px;
margin: 10px;
active: rgb(33, 150, 243);
`
const TvIcon = styled(Tv)`
color: rgb(220, 221, 222);
height: 20px;
margin: 10px;
active: rgb(33, 150, 243);
`
const SearchIcon = styled(Search)`
color: rgb(220, 221, 222);
height: 20px;
margin: 10px;
active: rgb(33, 150, 243);
`

/* const handleClick = (input.value) => {search}
  

  console.log(input.value) onClick={handleClick}*/

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
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/movies" component={Movies}></Route>
      <Route exact path="/series" component={Series}></Route>
      </Switch>

    </div> 
  </Router>
    
  );
};

export default App;
