import React from 'react';
import { Link } from 'react-router-dom';


const SideBar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/user">User Page</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>

      </ul>
    </div>
  );
};

export default SideBar;
