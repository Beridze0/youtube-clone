import React from 'react'
import './SettingsList.css'
import { NavLink } from 'react-router-dom'

const SettingsList = () => {
  return (
    <div className='settings-list-container'>
            <h1>Settings</h1>
            <div className='settings-list'>

<NavLink
  to="/account"
  className={({ isActive }) => `settings-list-option ${isActive ? 'active' : ''}`}
>
  <p>Account</p>
</NavLink>
<NavLink
  to="account_notifications"
  className={({ isActive }) => `settings-list-option ${isActive ? 'active' : ''}`}
>
  <p>Notifications</p>
</NavLink>
<NavLink
  to="account_playback"
  className={({ isActive }) => `settings-list-option ${isActive ? 'active' : ''}`}
>
  <p>Playback and performance</p>
</NavLink>
<NavLink
  to="account_downloads"
  className={({ isActive }) => `settings-list-option ${isActive ? 'active' : ''}`}
>
  <p>Downloads</p>
</NavLink>
<NavLink
  to="account_privacy"
  className={({ isActive }) => `settings-list-option ${isActive ? 'active' : ''}`}
>
  <p>Privacy</p>
</NavLink>
<NavLink
  to="account_sharing"
  className={({ isActive }) => `settings-list-option ${isActive ? 'active' : ''}`}
>
  <p>Connected apps</p>
</NavLink>
<NavLink
  to="account_billing"
  className={({ isActive }) => `settings-list-option ${isActive ? 'active' : ''}`}
>
  <p>Billing and payments</p>
</NavLink>
<NavLink
  to="account_advanced"
  className={({ isActive }) => `settings-list-option ${isActive ? 'active' : ''}`}
>
  <p>Advanced settings</p>
</NavLink>

            </div>
        </div>
  )
}

export default SettingsList