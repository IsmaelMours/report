import React, { useState } from 'react';
import Switch from 'react-switch';
import SignUp from './SignUp';
import Login from './Login';



const Home = () => {
  const [isSignUp, setIsSignUp] = useState(false);



  const handleChange = (checked) => {
    setIsSignUp(checked);
  };

 
 

  return (
    <div className={`container ${isSignUp ? 'flipped' : ''}`}>
      <h2>Welcome to our Website!</h2>
      <p>Please select an option:</p>
      <Switch
        onChange={handleChange}
        checked={isSignUp}
        checkedIcon={false}
        uncheckedIcon={false}
        onColor="#008CBA"
      />
       <p>{isSignUp ? 'Sign Up' : 'Login'}</p>
      <div className="form-container">
        {isSignUp ? <SignUp /> : <Login />}
      </div>
    {/* Pass loggedInUser to SideBar */}
    </div>
   
  );
};

export default Home;