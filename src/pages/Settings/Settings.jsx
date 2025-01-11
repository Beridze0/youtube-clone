import React from 'react'
import './Settings.css'

const Settings = () => {
  return (
    <div className='settings'>
        <div className='settings-list-container'>
            <h1>Settings</h1>
            <div className='settings-list'>
                <div className='settings-list-option'>
                    <p>Account</p>
                </div>
                <div className='settings-list-option'>
                    <p>Notifications</p>
                </div>
                <div className='settings-list-option'>
                    <p>Playback and performance</p>
                </div>
                <div className='settings-list-option'>
                    <p>Downloads</p>
                </div>
                <div className='settings-list-option'>
                    <p>Privacy</p>
                </div>
                <div className='settings-list-option'>
                    <p>Connected apps</p>
                </div>
                <div className='settings-list-option'>
                    <p>Billing and payments</p>
                </div>
                <div className='settings-list-option'>
                    <p>Advnaced settings</p>
                </div>
            </div>
        </div>

        <div className='account-settings'>
            <div className='account-settings-header'>
                <h1>Account</h1>
                <p className='big-header'>Choose how you appear and what you see on YouTube</p>
                <p className='signed-in-as'>Signed in as example@gmail.com</p>
            </div>
            <div className='account-settings-channel'>
                <h1>Your YouTube channel</h1>
                <p>This is your public presence on YouTube. You need a channel to upload your own videos, comment on videos, or create playlists.</p>
                <div className='account-settings-create-channel'>
                    <p>Your channel</p>
                    <button>Create a channel</button>
                </div>
            </div>
            <div className='account-settings-your-account'>
                <h1>Your account</h1>
                <p>You sign in to YouTube with your Google Account</p>
                <div className='settings-your-account'>
                    <p>Google Account</p>
                    <div className='settings-your-account-item'>
                        <span>View or change your Google Account settings</span>
                        <p>You will be redirected to your Google Account page</p>
                    </div>
                </div>
                <div className='settings-your-account-item'>
                    <p>Family Center</p>
                    <div className='account-settings-actions'>
                        <span>Manage kids profiles and features for teens</span>
                        <p>Tools to connect parents, kids, and teens on YouTube</p>
                    </div>
                </div>
                <div className='settings-your-account-item'>
                    <p>Google Account</p>
                    <div className='account-settings-actions'>
                        <p><span className='membership-status'>No membership</span>
                            <span>Get YouTube Premium</span>
                        </p>
                        <p>YouTube Premium offers uninterrupted music, ad-free videos, and more</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Settings