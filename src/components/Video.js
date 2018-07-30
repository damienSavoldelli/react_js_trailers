import React from 'react';

const YOUTUBE_EMBED = 'https://www.youtube.com/embed/';

const Video = ({ videoId }) => (
  <div className="embed-responsive embed-responsive-16by9">
    <iframe
      title={videoId}
      className="embed-responsive-item"
      src={`${YOUTUBE_EMBED}${videoId}?rel=0&amp`}
      frameBorder="0"
      allow="autoplay; encrypted-media"
      allowFullScreen
    />
  </div>
);


export default Video;
