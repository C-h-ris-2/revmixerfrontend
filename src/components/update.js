import React, { useState} from 'react'; 
import axios from 'axios';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

function Update({id, setUpdate, artistold, songold}) {
  // useState keep track of updated fields
    const [artist, setArtist] = useState('');
    const[song, setSong] = useState('');
    const[rating, setRating] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Make a POST request to add song
      axios
        .post('http://localhost:8080/comp333-hw3-frontend/index.php/user/updatesong', {id,artist,song,rating})
        .then((response) => {
          console.log(id);
          console.log(response.data.msg);
          setUpdate(false);
          // You can redirect to a login page or display a success message here
        })
        .catch((error) => {
          console.error('Registration error:', error);
          // Handle the registration error here
        });
    };

    return(
      <div>
        <h1>Update song's rating!</h1>
        <form action="" id="addnewsong" method="post" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="artist">Artist:</label>
            <input
            type="artist"
            id="artist"
            name="artist"
            value={artist}
            placeholder= {artistold}
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
            placeholder={songold}
            value={song}
            onChange={e => setSong(e.target.value)}
            required
          />
        </div>
        <div>
          {/* Active rating system */}
          <Rating style={{ maxWidth: 250 }} value={rating} onChange={setRating} />
        </div>
        <button type="submit">Update this rating!</button>
      </form>
      <button type="submit" onClick={() => setUpdate(false)}>Cancel</button>
    </div>
  );
}

export default Update;