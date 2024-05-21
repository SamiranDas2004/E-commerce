import React from "react";

function HomeVideo() {
  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      <div className="video-wrapper">
        <img
          src="https://pbs.twimg.com/media/ERZaFQ9W4AAyzEo.jpg"
          alt="Video 1"
          className="w-full h-custom object-cover"
        />
      </div>
      <div className="video-wrapper">
        <img
          src="https://img.olympics.com/images/image/private/t_s_16_9_g_auto/t_s_w1460/f_auto/primary/xritbykuhiha28mexocr"
          alt="Video 2"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default HomeVideo;
