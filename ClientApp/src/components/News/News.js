import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import React, { Component } from 'react';

import './News.scss'

function News() {
  return (
    <div>
     <TwitterTimelineEmbed sourceType="profile" screenName="NASAPersevere"options={{height: 400}}/>
    </div>
  )
}
export { News }
