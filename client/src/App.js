import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Link } from "react-router-dom";//add by me
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

const App = () => {
  const [savedList, setSavedList] = useState([]);
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          console.log('here is data',response.data);//add by me
          setMovieList(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <SavedList list={savedList} />
      {/* <div>Replace this Div with your Routes</div>modified by me */}
     <Route exact path='/'>
       <MovieList movies={movieList} />
     </Route>
      <Route path="/movies/:idItem">
        <Movie />
      </Route>
    </div>
  );
};

export default App;
