import './settings.css'
import avatar_placeholder from './avatar_placeholder.png'


const Settings = () => {

  return (
    <div className='settings-grid-container'>

      <div className='user-settings container'>
        <div className='user-image'><img src={avatar_placeholder} /></div>
        <div className='user-info'>
          <h2>Nora Seed</h2>
          <p>Joined June 25, 2020</p>
          <p>Last Active 1 day ago</p>
        </div>
      </div>

      <div className='account-settings container'>
        <h4>Account Settings</h4>
        <table className='account-settings-table'>
          <tbody>
            <tr>
              <td>Username</td>
              <td>noraseed234</td>
              <td><button className='small-btn button-cta'>Change</button></td>
            </tr>
            <tr>
              <td>Email</td>
              <td>noraseed234@gmail.com</td>
              <td><button className='small-btn button-cta'>Change</button></td>
            </tr>
            <tr>
              <td>Password</td>
              <td>*******</td>
              <td><button className='small-btn button-cta'>Change</button></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='mail-settings container'>
        <h4>Mail Settings</h4>
        <ul>
          <li><label>
            <input type="checkbox" />
            Send <strong>me</strong> weekly application summary email
          </label></li>
          <li><label>
            <input type="checkbox" />
            Send <strong>subscribers</strong> weekly application summary email
          </label></li>
          <li><label>
            <input type="checkbox" />
            Send <strong>me</strong> activity reminder emails
          </label></li>
          <li><label>
            <input type="checkbox" />
            Send <strong>subscribers</strong> activity reminder emails
          </label></li>
          <li><label>
            <input type="checkbox" />
            Send <strong>me</strong> notification email daily
          </label></li>
          <li><label>
            <input type="checkbox" />
            Send <strong>subscribers</strong> notification email daily
          </label></li>
        </ul>
      </div>

      <div className='sharing-settings container'>
        <h4>Sharing Settings</h4>
        <table>
          <thead>
            <tr>
              <td>User</td>
              <td>Has Access To</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Loretta Lindgren</td>
              <td><label><input type="checkbox" />Dashboard</label></td>
              <td><label><input type="checkbox" />Job Applications</label></td>
              <td><label><input type="checkbox" />Network</label></td>
            </tr>
            <tr>
              <td>Louise Smith</td>
              <td><label><input type="checkbox" />Dashboard</label></td>
              <td><label><input type="checkbox" />Job Applications</label></td>
              <td><label><input type="checkbox" />Network</label></td>
            </tr>
            <tr>
              <td>Jack Seed</td>
              <td><label><input type="checkbox" />Dashboard</label></td>
              <td><label><input type="checkbox" />Job Applications</label></td>
              <td><label><input type="checkbox" />Network</label></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='cta'>
        <button className='btn button-danger'>Delete Account</button>
        <button className='btn button-info'>Log Out</button>
      </div>

    </div>
  )
}

export default Settings