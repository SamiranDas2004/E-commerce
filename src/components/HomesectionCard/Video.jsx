import React from 'react';
import './video.css'

function Video() {
  return (
    <div className="video-container">
    
      <video autoPlay muted loop className="video">
        <source src="https://videos.pexels.com/video-files/3192082/3192082-uhd_3840_2160_25fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Video;
