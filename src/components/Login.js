import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = ({ onLoginSuccess }) => {
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
      const response = await fetch('http://localhost:3001/users');
      const response2 = await fetch('http://localhost:3001/admins');
  
      if (!response.ok || !response2.ok) {
        throw new Error('Failed to fetch data');
      }
  
      const userData = await response.json();
      const adminData = await response2.json();
  
      console.log('User data:', userData);
      console.log('Admin data:', adminData);
  
      const user = userData.find(
        (user) => user.email === email && user.password === password
      );
      const admin = adminData.find(
        (admin) => admin.email === email && admin.password === password
      );
  
      if (user) {
        localStorage.setItem('userData', JSON.stringify(user));
        window.location.href = '/dashboard';
        onLoginSuccess(user.email);
        toast.success('Logged in successfully!', {
          position: toast.POSITION.TOP_CENTER,
        });
      } else if (admin) {
        localStorage.setItem('adminData', JSON.stringify(admin));
        window.location.href = '/admin';
        onLoginSuccess(admin.email);
        toast.success('Admin logged in successfully!', {
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
