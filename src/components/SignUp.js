import React, { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [contactNumber, setContactNumber] = useState('');

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRePasswordChange = (event) => {
    setRePassword(event.target.value);
  };

  const handleContactNumberChange = (event) => {
    setContactNumber(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== rePassword) {
      alert('Passwords do not match');
      return;
    }

    const newUser = {
      fullName,
      email,
      password,
      contactNumber,
    };

    try {
      await axios.post('http://localhost:3001/users', newUser);

      // Reset form fields after successful registration
      setFullName('');
      setEmail('');
      setPassword('');
      setRePassword('');
      setContactNumber('');

      alert('User registered: ' + newUser.fullName); // Show alert for user registration
    } catch (error) {
      alert('Error registering user:', error);
    }
  };

  return (
    <div className="form-container2">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Full Name:</label>
          <input
            type="text"
            value={fullName}
            onChange={handleFullNameChange}
            required
          />
        </div>
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
        <div className="form-group">
          <label>Re-enter Password:</label>
          <input
            type="password"
            value={rePassword}
            onChange={handleRePasswordChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Contact Number:</label>
          <input
            type="tel"
            value={contactNumber}
            onChange={handleContactNumberChange}
            required
          />
        </div>
        <div className="button-container">
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
