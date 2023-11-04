import React from 'react'; 
import axios from 'axios';
import {useParams} from 'react-router-dom';
  
// function to delete song
function Deletesong({id, setDeletesong, deletesong}) {

  // on submit
    const handleDelete = (e) => {
      // reset values in text field
      e.preventDefault();
  
      // Make a POST request to your API to register the user
      axios
        .post('http://localhost:8080/comp333-hw3-frontend/index.php/user/deletesong', {id})
        .then((response) => {
          console.log(response.data.msg);
          setDeletesong(false);
          // You can redirect to a login page or display a success message here
        })
        .catch((error) => {
          console.error('Registration error:', error);
          // Handle the registration error here
        });
    };
    return (
      <div>
        <h1>Are you sure you want to delete this rating?</h1>
        <form action="" id="deletesong" method="post" onSubmit={handleDelete}>
        <button type="submit">Delete Song</button>
        <button type="submit" onClick={() => setDeletesong(false)}>Cancel</button>
      </form>
    </div>
  );
  }

  export default Deletesong;