import React, { useState} from 'react'; 
import axios from 'axios';
  
function RegistrationForm() {
    const [formData, setFormData] = useState({
      username: '',
      password: '',
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Make a POST request to your API to register the user
      axios
        .post('http://localhost/comp333-hw3-frontend/index.php/user/create', formData)
        .then((response) => {
          console.log('User registered:', response.data);
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
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegistrationForm;