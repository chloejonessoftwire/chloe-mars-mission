import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import React from 'react';
import { NewsContextProvider } from '../../NewsContext';
import NewsLive from './NewsLive';

import './News.scss'


function News({theme}) {
  return (
    <div>
        <div className='twitter-feeds'> 
            <div className='twitter-feed'>
                <TwitterTimelineEmbed sourceType="profile" screenName="NASAPersevere" theme={theme? 'dark' : 'light'} options={{height: 400}}/>
            </div>
            <div className='twitter-feed'>
                <TwitterTimelineEmbed sourceType="profile" screenName="nasa" className='twitter' theme={theme? 'dark' : 'light'} options={{height: 400}}/>
            </div>
            <div className='twitter-feed'>
                <TwitterTimelineEmbed sourceType="profile" screenName="esa" className='twitter' theme={theme? 'dark' : 'light'} options={{height: 400}}/>
            </div>
        </div>
        <NewsContextProvider>
            <NewsLive/>
        </NewsContextProvider>
    </div>
  )
}
export { News }
