import React from 'react'
import './SettingsNotifications.css'
import Switch from '@mui/material/Switch'

const SettingsNotifications = () => {
  return (
    <div className='settings-notifications'>
        <div className='settings-notifications-header'>
            <h1>Notifications</h1>
            <p>Choose when and how to be notified</p>
            <p className='account-settings-small-txt'>Select push and email notifications you'd like to receive</p>
        </div>

        <div className='notifications-general'>
          <div className='general-header'>
            <h1>General</h1>
            <p>Manage your mobile and desktop notifications</p>
          </div>
          <div className='your-preferences'>
            <div className='preferences-header'>
              <h1>Your Preferences</h1>
            </div>
                
            <div className='preferences'>
              <div className='switch-container'>
                  <Switch />
                  <div className='preferences'>
                      <p>Subscriptions</p>
                      <p className='account-settings-small-txt'>Notify me about activity from the channels I'm subscribed to</p>
                  </div>
              </div>
              <div className='switch-container'>
                  <Switch />
                  <div className='preferences'>
                      <p>Recommended videos</p>
                      <p className='account-settings-small-txt'>Notify me of videos I might like based on what I watch</p>
                  </div>
              </div>
              <div className='switch-container'>
                  <Switch />
                  <div className='preferences'>
                      <p>Activity on my channel</p>
                      <p className='account-settings-small-txt'>Notify me about comments and other activity on my channel or videos</p>
                  </div>
              </div>
              <div className='switch-container'>
                  <Switch />
                  <div className='preferences'>
                      <p>Activity on my comments</p>
                      <p className='account-settings-small-txt'>Notify me about replies, likes, and other activity on my comments, and activity on my posts on other channels</p>
                  </div>
              </div>
              <div className='switch-container'>
                  <Switch />
                  <div className='preferences'>
                      <p>Mentions</p>
                      <p className='account-settings-small-txt'>Notify me when others mention my channel</p>
                  </div>
              </div>
              <div className='switch-container'>
                  <Switch />
                  <div className='preferences'>
                      <p>Others reusing my content</p>
                      <p className='account-settings-small-txt'>Notify me when others share, remix, or respond to my content on their channels</p>
                  </div>
              </div>
              <div className='switch-container'>
                  <Switch />
                  <div className='preferences'>
                      <p>Promotional content and offerings</p>
                      <p className='account-settings-small-txt'>Notify me of promotional content and offerings, like members-only perks</p>
                  </div>
              </div>
            </div>   
          </div>
        </div>

        <div className='email-notifications'>
            <div className='email-header'>
              <h1>Email notifications</h1>
              <p>Your emails are sent to example@gmail.com. To unsubscribe from an email, click the "Unsubscribe" link at the bottom of it. Learn more about emails from YouTube.</p>
            </div>
            <div className='email-notifications-options'>
                <div className='email-notifications-left'>
                    <p>Your family</p>
                    <p>Permission</p>
                    <p>Your preferences</p>
                </div>

                <div className='email-notifications-right'>
                  <div className='switch-container'>
                    <Switch />
                    <div className='preferences'>
                        <p>Promotional content and offerings</p>
                        <p className='account-settings-small-txt'>Notify me of promotional content and offerings, like members-only perks</p>
                    </div>
                  </div>
                  <div className='switch-container'>
                    <Switch />
                    <div className='preferences'>
                        <p>Promotional content and offerings</p>
                        <p className='account-settings-small-txt'>Notify me of promotional content and offerings, like members-only perks</p>
                    </div>
                  </div>
                  <div className='switch-container'>
                    <Switch />
                    <div className='preferences'>
                        <p>Promotional content and offerings</p>
                        <p className='account-settings-small-txt'>Notify me of promotional content and offerings, like members-only perks</p>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SettingsNotifications