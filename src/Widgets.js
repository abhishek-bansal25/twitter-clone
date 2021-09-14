import React from 'react';
import "./Widgets.css"
import {
    TwittweTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed
} from "react-twitter-embed"
import SearchIcon from "@material-ui/icons/Search"

function Widgets() {
    return ( 
        <div className="widgets">
            <SearchIcon className="widgets__searchIcon" />
        </div>
     );
}

export default Widgets;