import React, { useState } from 'react'
import './SettingsNotifications.css'
import Switch from '@mui/material/Switch'
import { FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material'

const SettingsNotifications = () => {

  const [language, setLanguage] = useState(localStorage.getItem("language") || "English (US)")

  const handleChange = (event) => {
    const selectedLanguage = event.target.value;
    setLanguage(selectedLanguage);
    localStorage.setItem("language", selectedLanguage);   
  };

  return (
    <div className='settings-notifications'>
        <div className='settings-notifications-header'>
            <h1>Notifications</h1>
            <p className='big-txt'>Choose when and how to be notified</p>
            <p className='account-settings-small-txt'>Select push and email notifications you'd like to receive</p>
        </div>

        <div className='notifications-general'>
          <div className='general-header'>
            <h1>General</h1>
            <p className='account-settings-small-txt'>Manage your mobile and desktop notifications</p>
          </div>
          <div className='your-preferences'>
            <div className='preferences-header'>
              <h1>Your Preferences</h1>
            </div>
                
            <div className='preferences-container'>
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
                </div>

                <div className='email-notifications-right'>
                  <div className='switch-container'>
                    <Switch />
                    <div className='preferences'>
                        <p>Send me emails about family and product updates for YouTube or YouTube Kids</p>
                        <p className='account-settings-small-txt'>By turning on this setting, you're opting in to emails with recommended content, tips, and product updates for families</p>
                    </div>
                  </div>
                  <div className='switch-container'>
                    <Switch />
                    <div className='preferences'>
                        <p>
                        Send me emails about my YouTube activity and updates I requested</p>
                        <p className='account-settings-small-txt'>
                        If this setting is turned off, YouTube may still send you messages regarding your account, required service announcements, legal notifications, and privacy matters
                        </p>
                    </div>
                  </div>
                </div>
            </div>
            
            <div className='your-preferences three-preferences'>
            <div className='preferences-header'>
              <h1>Your Preferences</h1>
            </div>
                
            <div className='preferences-container'>
              <div className='switch-container'>
                  <Switch />
                  <div className='preferences'>
                      <p>General product updates</p>
                      <p className='account-settings-small-txt'>Announcements and recommendations</p>
                  </div>
              </div>
              <div className='switch-container'>
                  <Switch />
                  <div className='preferences'>
                      <p>YouTube Premium updates</p>
                      <p className='account-settings-small-txt'>
                      Announcements, updates, and recommendations from YouTube Premium and YouTube Music Premium
                      </p>
                  </div>
              </div>
              <div className='switch-container'>
                  <Switch />
                  <div className='preferences'>
                      <p>Creator updates and announcements</p>
                      <p className='account-settings-small-txt'>
                      Product announcements, creator events, and personalized tips to grow your YouTube channel
                      </p>
                  </div>
              </div>
              </div>
              </div>

              <div className='notifications-language'>
                  <div className='language-header'>
                      <h1>Language</h1>
                  </div>
                  <div className="choose-language" >
      <FormControl fullWidth >
        <Select
          value={language}
          onChange={handleChange}
          displayEmpty
        >
          <MenuItem value="English (US)">English (US)</MenuItem>
          <MenuItem value="English (UK)">English (UK)</MenuItem>
          <MenuItem value="French">French</MenuItem>
          <MenuItem value="Spanish">Spanish</MenuItem>
          <MenuItem value="German">German</MenuItem>
        </Select>
      </FormControl>
      <Typography variant="body2" color="textSecondary" style={{ marginTop: '8px' }}>
        This setting applies to emails only
      </Typography>
    </div>
              </div>
        </div>
    </div>
  )
}

export default SettingsNotifications