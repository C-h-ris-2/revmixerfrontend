import React, { useState} from 'react'; 
// import {redirect} from "react-router-dom";
import axios from 'axios';
// import {username} from './login.js';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

// add new song feature
function AddNewSong({setAddnewsong}) {
  // use states to keep track of changing values
    const [artist, setArtist] = useState('');
    const [song, setSong] = useState('');
    const [rating, setRating] = useState('');

    // access username
    const username = localStorage.getItem('username')

    // on submit
    const handleSubmit = (e) => {
      // reset when submit
      e.preventDefault();
  
      // Make a POST request to your API to register the user
      axios
        .post('http://localhost:8080/comp333-hw3-frontend/index.php/user/songinsert', { username,artist,song, rating})
        .then((response) => {
          console.log(response.data.msg);
          setAddnewsong(false);
        })
        .catch((error) => {
          console.error('Error adding new song:', error);
          // Handle the registration error here
        });
    };
  
    return (
      <div>
        <h1>Add a new song!</h1>
        {/* view form */}
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
          {/* Interactive star rating feature */}
          <Rating style={{ maxWidth: 250 }} value={rating} onChange={setRating} />
        </div>
        <button type="submit">Submit New Song</button>
      </form>
      <button type="submit" onClick={() => {setAddnewsong(false)}}>Cancel</button>
    </div>
  );
}

export default AddNewSong;
