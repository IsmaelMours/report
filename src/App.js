
import { Route,  Routes } from 'react-router-dom';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Home from './components/Home';
import User from './components/User';
import Dashboard from './components/Dashboard';
import PowerBI from './modules/PowerBI';
import PresentationSkills from './modules/PresentationSkills';
import ProjectPlan from './modules/ProjectPlan';
import Python from './modules/Python';
import SQL from './modules/SQL';
import Statistics from './modules/Statistics';
import RPA from './modules/RPA';
import SoftwareTesting from './modules/SoftwareTesting';
import About from './components/About';


function App() {
 

  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user" element={<User />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/project-plan" element={<ProjectPlan />} />
        <Route path="/presentation-skills" element={<PresentationSkills />} />
        <Route path="/sql" element={<SQL />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/python" element={<Python />} />
        <Route path="/power-bi" element={<PowerBI />} />
        <Route path="/software-testing" element={<SoftwareTesting />} />
        <Route path="/rpa" element={<RPA />} />
      </Routes>
    </div>
  );
}

export default App;
