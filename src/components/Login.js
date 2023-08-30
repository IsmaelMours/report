import React, { useState } from 'react';
import {  toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';




const Login = ({onLoginSuccess}) => { // Pass a callback prop to handle successful login
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/users'); // Assuming your json-server is running on port 3001
      const users = await response.json();

      const user = users.find((user) => user.email === email && user.password === password);

      if (user) {
        // Simulate setting user data in local storage after successful login
        localStorage.setItem('userData', JSON.stringify(user));

        // Call the onLogin callback to trigger redirection in the parent component
       
        window.location.href = '/user';
        // Display a toast notification
        onLoginSuccess(user.email);
        toast.success('Logged in successfully!', {
          position: toast.POSITION.TOP_CENTER,
        });
      } else {
        toast.error('Login failed. Invalid email or password.', {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    } catch (error) {
      console.error('Login error:', error);
      toast.error('An error occurred during login', {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };
  

  return (
    <div className="form-container2">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <div className="button-container">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};



export default Login;
