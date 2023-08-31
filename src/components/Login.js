import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
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
      // Perform your login/authentication logic here.
      // For this example, we'll simulate a successful login.
      if (email === 'motshabielizabeth1@gmail.com' && password === 'Motshabi#2001') {
        // Simulate a delay before redirecting
        setTimeout(() => {
          // Redirect to the dashboard
          window.location.href = '/dashboard';
          // You can also call the onLoginSuccess function if needed
        
        }, 1000); // 1 second delay for demonstration

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
          <input type="email" value={email} onChange={handleEmailChange} required />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} required />
        </div>
        <div className="button-container">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
