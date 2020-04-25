import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Route,Link,useParams,useRouteMatch} from 'react-router-dom';//add by me
import MovieCard from './MovieCard';
const Movie = (props) => {
  const [movie, setMovie] = useState({});
  const {idItem} = useParams();
  const match = useRouteMatch();
  console.log(match);
  useEffect(() => {
    
    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook

       axios
        .get(`http://localhost:5000/api/movies/${idItem}`)
        .then(response => {
          setMovie(response.data);
         
        })
        .catch(error => {
          console.error(error);
        });

  },[idItem]);
  
  
  // Uncomment this only when you have moved on to the stretch goals
  // const saveMovie = () => {
  //   const addToSavedList = props.addToSavedList;
  //   addToSavedList(movie)
  // }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  const { title, director, metascore, stars } = movie;
  return (
    <div className="save-wrapper">
      <div className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <Link to ={`${match.url}/actors`}><h3>movieActors</h3></Link>
        <Route path={`${match.path}/actors`}> 
          <MovieCard item={movie}/>
        </Route>
         
         {/* {stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}  */}
      </div>
      <div className="save-button">Save</div>
    </div>
  );
}

export default Movie;
