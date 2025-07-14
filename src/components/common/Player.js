"use client";
import React, { Component } from 'react';
import dynamic from 'next/dynamic';
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

class Player extends Component {
  render() {
    const { url } = this.props;

    return (
      <ReactPlayer
        url={url}
        loop={true}
        muted={true}
        playsinline={true}
        playing={false}
        controls={true}
        volume={0.8}
        width='100%'
        height='100%'
      />
    )
  }
}

export default Player;