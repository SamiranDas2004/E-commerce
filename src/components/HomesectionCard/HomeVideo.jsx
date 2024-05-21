import React from 'react';

function HomeVideo() {
  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      <div className="video-wrapper">
        <img   
      
        src="https://pbs.twimg.com/media/ERZaFQ9W4AAyzEo.jpg" alt="Video 1" className="w-full h-custom object-cover"/>
      </div>
      <div className="video-wrapper">
        <img src="https://pbs.twimg.com/media/ERZaFQ9W4AAyzEo.jpg" alt="Video 2" className="w-full h-custom object-cover"/>
      </div>
    </div>
  );
}

export default HomeVideo;
