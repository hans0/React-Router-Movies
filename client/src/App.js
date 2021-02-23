import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Switch } from 'react-router-dom';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [savedNames, setSavedNames] = useState([]);
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies') // Study this endpoint with Postman
        .then(response => {
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state
          // console.log(response.data);
          setMovieList(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    console.log('addToSavedList id', id)
    if (saved.indexOf(id) === -1){
      setSaved([...saved, id]);
    }
    axios.get(`http://localhost:5000/api/movies/${id}`)
      .then(response => {
        console.log(response.data.title);
        if (saved.indexOf(id) === -1){
          setSaved([...saved, id]);
          setSavedNames([...savedNames, response.data.title]);
        }
      })
      .catch(error => {
        console.log(error)
      })
    // console.log(saved)
    // console.log('addToSavedList in App.js');
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    <div>
      <SavedList list={saved} savedNames={savedNames} />
      <Switch>
        <Route path='/movies/:id'>
          <Movie addToSavedList={addToSavedList} />
        </Route>
        <Route path='/'>
          <MovieList movies={movieList} />
        </Route>
      </Switch>
    </div>
  );
}
