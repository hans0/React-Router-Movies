import React, { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function SavedList(props) {
  
  const { list } = props;


  console.log(`SavedList list `, list);

  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
        {/* trying to figure out how to make a call for each of these movies */}
        {props.list.map(m => (
            <div>{m}</div>
          )
        )}
      
      {/* {props.list.map(movie => (
        <span className="saved-movie">{movie.title}</span>
      ))} */}
       
      <Link to={`/`} >
        <div className="home-button">Home</div>
      </Link>

    </div>
  );
}
