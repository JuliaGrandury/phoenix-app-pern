import { NavLink, useNavigate } from 'react-router-dom'

const SideBar = () => {

  // Change after authorization/authentication are complete
  const user = true

  const onLogout = () => {
    console.log('User wants to logout')
  }

  return (
    <div>
      <div className='logo'>Phoenix</div>
      <ul>
        {user ? (
          <>
            <li><NavLink to='/'>Dashboard</NavLink></li>
            <li><NavLink to='/jobboard'>Job Applications</NavLink></li>
            <li><NavLink to='/networkgraph'>Network</NavLink></li>
            <li><NavLink to='/settings'>Settings</NavLink></li>
            <li><button className='btn' onClick={onLogout}>Logout</button></li>
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

export default SideBar

