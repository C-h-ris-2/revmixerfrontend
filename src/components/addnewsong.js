import React, {useState} from 'react';
import axios from 'axios';

function Addnewsong() {
    const[artist, setArtist] = useState('');
    const[song, setSong] = useState('');
    const[rating, setRating] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();

        axios
            .post("http://localhost:8080/comp333-hw3-frontend/index.php/user/songinsert", {username, artist, song, rating})
            .then((response) => {
                console.log(response.data.msg);
            })
            .catch((error) => {
                console.error("song insertion error:", error);
            });
    };

    return (
        <div>
            <h1>Insert a new song!</h1>
            <form action="" id="register" method="post" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="artist">Artist:</label>
                    <input
                    type="text"
                    id="artist"
                    name="artist"
                    value={artist}
                    onChange={e=> setArtist(e.target.value)}
                    required
                    />
                </div>
                <div>
                    <label htmlFor="song">Song:</label>
                    <input 
                        type="song"
                        id='song'
                        name="song"
                        value={song}
                        onChange={e=> setSong(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="rating">Rating:</label>
                    <input
                        type="rating"
                        id="rating"
                        name="rating"
                        value={rating}
                        onChange={e=> setRating(e.target.value)}
                    />
                </div>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default Addnewsong;