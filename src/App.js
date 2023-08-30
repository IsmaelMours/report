
import { Route,  Routes } from 'react-router-dom';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Home from './components/Home';
import User from './components/User';
import Dashboard from './components/Dashboard';


function App() {
 

  return (
  
<div className="app-container">


 
    <Routes>
      
        <Route path="/" element={<Home />} />
       
          <Route path="/user" element={<User />} />
          <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login  />} />
            <Route path="/signup" element={<SignUp />} />
      
      </Routes>
      </div>
 
  );
}

export default App;
