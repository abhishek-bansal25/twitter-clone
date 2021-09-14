import { React} from "react";
import "./Sidebar.css"
import TwitterIcon from '@material-ui/icons/Twitter';
import SidebarOption from "./SidebarOption";
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from "@material-ui/icons/Search"
import NotificationNoneIcon from "@material-ui/icons/NotificationsNone"
import MailOutlineIcon from "@material-ui/icons/MailOutline"
import BookmarkBorder from "@material-ui/icons/BookmarkBorder"
import ListAlt from "@material-ui/icons/ListAlt"
import PermIdentity from "@material-ui/icons/PermIdentity"
import MoreHoriz from "@material-ui/icons/MoreHoriz"
import {Button} from "@material-ui/core"

function Sidebar(){
    return(
        <div className="sidebar">
            {/* twitter icon */}
            <TwitterIcon className="sidebar__twitterIcon"/>

            <SidebarOption active Icon={HomeIcon} text = "home"/>
            <SidebarOption Icon={SearchIcon} text="explore"/>
            <SidebarOption Icon={NotificationNoneIcon} text= "notifications"/>
            <SidebarOption Icon={MailOutlineIcon} text= "messages"/>
            <SidebarOption Icon={BookmarkBorder} text= "bookmark"/>
            <SidebarOption Icon={ListAlt} text= "lists"/>
            <SidebarOption Icon={PermIdentity} text= "profile"/>
            <SidebarOption Icon={MoreHoriz} text= "more"/>
            

            {/* twitterButton */}
            <Button variant="outlined" className="sidebar__tweet" fullWidth>Tweet</Button>
        </div>
    )
}

export default Sidebar