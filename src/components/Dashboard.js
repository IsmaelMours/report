import React from 'react'
import SideBar from '../components/SideBar'
import ModuleBarGraph from './ModuleBarGraph'


const Dashboard = () => {
  return (
    <div>
       <SideBar text= 'Dahsboard'>
        <ModuleBarGraph/>
       </SideBar>
    </div>
  )
}

export default Dashboard