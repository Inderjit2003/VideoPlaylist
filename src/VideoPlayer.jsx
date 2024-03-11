import React from 'react'
import ReactPlayer from 'react-player';
import style from './CSS/tutorial.module.css'

export default function VideoPlayer() {
    const params = new URLSearchParams(window.location.search);
    const link = params.get("id");
  return (
    <div className={`${style.video}`}>
    <ReactPlayer url={"https://www.youtube.com/watch?v=" + link} />
  </div>
  )
}
