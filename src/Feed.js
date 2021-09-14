import React from 'react';
import "./Feed.css"
import TweetBox from "./TweetBox"
import Post from "./Post"

function Feed() {
    return ( 
        <div className="feed">
            {/* header */}
            <div className="feed__header">
            <h2>homepage</h2> 
            </div>

            {/* tweetBox */}
            <TweetBox />

            {/* post */}
            <Post />
        </div>
     );
}

export default Feed;
