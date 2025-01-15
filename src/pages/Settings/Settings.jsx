import React from 'react'
import './Settings.css'
import { Link } from 'react-router-dom'
import SettingsList from '../../components/SettingsList/SettingsList'

const Settings = () => {
  return (
    <div className='settings'>
        <div className='account-settings'>
            <div className='account-settings-header'>
                <h1>Account</h1>
                <p className='big-header'>Choose how you appear and what you see on YouTube</p>
                <p className='signed-in-as'>Signed in as example@gmail.com</p>
            </div>
            <div className='account-settings-channel'>
                <h1>Your YouTube channel</h1>
                <p className='account-settings-small-txt'>This is your public presence on YouTube. You need a channel to upload your own videos, comment on videos, or create playlists.</p>
                <div className='account-settings-create-channel'>
                    <p>Your channel</p>
                    <Link className='settings-create-channel-btn'>Create a channel</Link>
                </div>
            </div>
            <div className='account-settings-your-account'>
                <div className='your-account-header'>
                    <h1>Your account</h1>
                    <p className='account-settings-small-txt'>You sign in to YouTube with your Google Account</p>
                </div>
                <div className='settings-google-account-container'>
                    <div className='settings-google-account-left'>
                        <p>Google Account</p>
                        <p>Family Center</p>
                        <p>Membership</p>
                    </div>

                    <div className='settings-google-account-right'>
                        <p><Link>View or change your Google Account settings</Link><br />
                        You will be redirected to your Google Account page</p>
                        <p><Link>Manage kids profiles and features for teens</Link><br />
                        Tools to connect parents, kids, and teens on YouTube</p>
                        <p><span>No membership</span> | <Link>Get YouTube Premium</Link><br />
                        YouTube Premium offers uninterrupted music, ad-free videos, and more</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Settings