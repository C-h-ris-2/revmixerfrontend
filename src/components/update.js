import React, { useState} from 'react'; 
import axios from 'axios';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

function Update({id, setUpdate, update}) {
    const [artist, setArtist] = useState('');
    const[song, setSong] = useState('');
    const[rating, setRating] = useState('');
      
    // const handleChange = (e) => {
    //   const { name, value } = e.target;
    //   setFormData({ ...formData, [name]: value });
    // };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Make a POST request to add song
      axios
        .post('http://localhost:8080/comp333-hw3-frontend/index.php/user/updatesong', {id,artist,song,rating})
        .then((response) => {
          console.log(response.data.msg);
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
        <button type="submit">Update this rating!</button>
      </form>
      <button type="submit" onClick={() => setUpdate(false)}>Home</button>
    </div>
  );
}

export default Update;