import React from "react";
import video from './video/video.mp4'
import classes from './Header.module.css'

const VideoHeader = () => {

    return (
        <div className={classes.header_img}>
        <video muted autoPlay id={classes.header_img}>
            <source src={video} type="video/mp4"/>
        </video>
    </div>
    )
}

export default VideoHeader;