import React from 'react';
import "./TweetBox.css"
import { Avatar, Button } from "@material-ui/core";
function TweetBox() {
    return ( 
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar />
                    <input type="text" placeholder="what's happening"/>
                </div>
                <input 
                type="text" 
                placeholder="optional: enter image URL"
                className="tweetBox__imageInput"
                />
                <Button className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
     );
}

export default TweetBox;