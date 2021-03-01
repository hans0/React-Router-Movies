import React from 'react';
import { Link } from 'react-router-dom';

export default function SavedList(props) {
  
  const { list, savedNames } = props;

  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
        {/* trying to figure out how to make a call for each of these movies */}
        {savedNames.map(m => (
            <div key={m}>{m}</div>
          )
        )}
      {/* what they gave me */}
      {/* {props.list.map(movie => (
        <span className="saved-movie">{movie.title}</span>
      ))} */}
       
      <Link to={`/`} >
        <div className="home-button">Home</div>
      </Link>
    </div>
  );
}
