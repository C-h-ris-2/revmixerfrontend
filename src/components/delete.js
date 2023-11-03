import React from 'react'; 
import axios from 'axios';
import {useParams} from 'react-router-dom';
  
function Deletesong(id) {
      
    // const handleChange = (e) => {
    //   const { name, value } = e.target;
    //   setFormData({ ...formData, [name]: value });
    // };
  
    const handleDelete = (e) => {
      e.preventDefault();
  
      // Make a POST request to your API to register the user
      axios
        .post('http://localhost:8080/comp333-hw3-frontend/index.php/user/deletesong', {id})
        .then((response) => {
          console.log(response.data.msg);
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
      </form>
    </div>
  );
  }

  export default Deletesong;