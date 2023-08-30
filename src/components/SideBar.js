import React, { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from "react-pro-sidebar";
import { Link } from 'react-router-dom';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import DashboardIcon from '@mui/icons-material/Dashboard';
import InfoIcon from '@mui/icons-material/Info';

const SideBar = ({ text, children }) => {
    const { collapseSidebar } = useProSidebar();
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

    const linkStyle = {
        textDecoration: 'none',
        color: 'inherit',
        fontSize: "19px",
        fontWeight: "bold"
    };

    const sidebarStyle = {
        backgroundColor: '#0C1729',
        height: '100vh'
    };

    return (
      <div id="app" style={{ height: "100vh", display: "flex" }}>
          <Sidebar style={sidebarStyle}>
              <Menu>
                  <MenuItem
                      icon={<MenuOutlinedIcon />}
                      onClick={() => {
                          collapseSidebar();
                          setIsSidebarCollapsed(!isSidebarCollapsed);
                      }}
                      style={{ textAlign: "center" }}
                  >
                      <h1>LG</h1>
                  </MenuItem>
                  {isSidebarCollapsed ? null : (
                      <div className="image">
                          {/* <img src={pic} alt="true"/> */}
                      </div>
                  )}
                  <div className="link-list">
                      <Link to="/dashboard" style={linkStyle}>
                          <MenuItem icon={<DashboardIcon />}>Dashboard</MenuItem>
                      </Link>
                      <Link to="/about" style={linkStyle}>
                          <MenuItem icon={<InfoIcon />}>About </MenuItem>
                      </Link>
                      <SubMenu title="Modules" icon={<ViewModuleIcon />}> 
                       
                          {/* Add more module links here */}
                          <MenuItem>
                              <Link to="/project-plan" style={linkStyle}>Project Plan</Link>
                          </MenuItem>
                          <MenuItem>
                              <Link to="/presentation-skills" style={linkStyle}>Presentation Skills</Link>
                          </MenuItem>
                          <MenuItem>
                              <Link to="/sql" style={linkStyle}>SQL</Link>
                          </MenuItem>
                          <MenuItem>
                              <Link to="/statistics" style={linkStyle}>Statistics</Link>
                          </MenuItem>
                          <MenuItem>
                              <Link to="/python" style={linkStyle}>Python</Link>
                          </MenuItem>
                          <MenuItem>
                              <Link to="/power-bi" style={linkStyle}>Power BI</Link>
                          </MenuItem>
                          <MenuItem>
                              <Link to="/software-testing" style={linkStyle}>Software Testing</Link>
                          </MenuItem>
                          <MenuItem>
                              <Link to="/rpa" style={linkStyle}>RPA</Link>
                          </MenuItem>
                      </SubMenu>
                      <Link to="/" style={linkStyle}>
                          <MenuItem icon={<LogoutIcon />}>Exit</MenuItem>
                      </Link>
                  </div>
              </Menu>
          </Sidebar>
          <main style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center", padding: 0 }}>
              <h1 style={{ color: "black", margin: 0 }}>
                  <div className="test">
                      <p className="header"> {text} </p>   
                      {children}
                  </div>
              </h1>
          </main>
      </div>
  );
}

export default SideBar;
