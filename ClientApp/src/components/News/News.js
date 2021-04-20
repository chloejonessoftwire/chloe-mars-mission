import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import React from 'react';

import './News.scss'

function News(props) {
  return (
    <div>
        <div className='twitter-feeds'> 
            <div className='twitter-feed'>
                <TwitterTimelineEmbed sourceType="profile" screenName="NASAPersevere" options={{height: 400}}/>
            </div>
            <div className='twitter-feed'>
                <TwitterTimelineEmbed sourceType="profile" screenName="nasa" className='twitter' theme='dark' options={{height: 400}}/>
            </div>
            <div className='twitter-feed'>
                <TwitterTimelineEmbed sourceType="profile" screenName="esa" className='twitter' options={{height: 400}}/>
            </div>
        </div>
    </div>
  )
}
export { News }
