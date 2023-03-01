import React from 'react'
import { NavLink } from 'react-router-dom'
// import '../../App.css'

const NavBar = () => {

  // Change after authorization/authentication are complete
  const user = true

  // const onLogout = () => {
  //   console.log('User wants to logout')
  // }

  return (
    <div className="navbar">
      <div className="logo">Phoenix</div>
      <ul>
        {user ? (
          <>
            <li><NavLink to='/'>Dashboard</NavLink></li>
            <li><NavLink to='/jobsdatabase'>Job Applications</NavLink></li>
            <li><NavLink to='/networkgraph'>Network</NavLink></li>
            <li><NavLink to='/settings'>Settings</NavLink></li>
          </>
        ) : (
          <>
            <li><NavLink to='/login'>Login</NavLink></li>
            <li><NavLink to='/register'>Register</NavLink></li>
          </>
        )}
      </ul>
    </div>
  )
}

export default NavBar
