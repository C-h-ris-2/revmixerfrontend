import React, { useState} from 'react'; 
// import {redirect} from "react-router-dom";
import axios from 'axios';
// import {username} from './login.js';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

function AddNewSong() {
    const [artist, setArtist] = useState('');
    const [song, setSong] = useState('');
    const [rating, setRating] = useState('');

    const username = localStorage.getItem('username')

    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Make a POST request to your API to register the user
      axios
        .post('http://localhost:8080/comp333-hw3-frontend/index.php/user/songinsert', { username,artist,song, rating})
        .then((response) => {
          console.log(response.data.msg);
          <redirect to="/mainpage"/>
        })
        .catch((error) => {
          console.error('Error adding new song:', error);
          // Handle the registration error here
        });
    };
  
    return (
      <div>
        <h1>Add a new song!</h1>
        <form action="" id="addnewsong" method="post" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="artist">Artist:</label>
            <input
            type="artist"
            id="artist"
            name="artist"
            value={artist}
            onChange={e => setArtist(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="song">Song:</label>
          <input
            type="song"
            id="song"
            name="song"
            value={song}
            onChange={e => setSong(e.target.value)}
            required
          />
        </div>
        <div>
          <Rating style={{ maxWidth: 250 }} value={rating} onChange={setRating} />
        </div>
        <button type="submit">Submit New Song</button>
      </form>
    </div>
  );
}

export default AddNewSong;
