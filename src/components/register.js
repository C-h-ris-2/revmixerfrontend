import React, { useState} from 'react'; 
import axios from 'axios';
  
function RegistrationForm() {
    const [username, setUsername] = useState('');
    const[password, setPassword] = useState('');
      
    // const handleChange = (e) => {
    //   const { name, value } = e.target;
    //   setFormData({ ...formData, [name]: value });
    // };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Make a POST request to your API to register the user
      axios
        .post('http://localhost/comp333hw3/index.php/user/create', {username, password})
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
        <h1>User Registration</h1>
        <form action="" id="register" method="post" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegistrationForm;