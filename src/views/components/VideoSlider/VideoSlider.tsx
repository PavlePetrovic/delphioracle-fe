import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Props for VideoSlider
interface VideoSliderProps {
  videoPaths: Array<{ path: string; poster: string }>; // Array of video paths
}

const VideoSlider: React.FC<VideoSliderProps> = ({ videoPaths }) => {
  const [activeVideoIndex, setActiveVideoIndex] = useState<number | null>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 473,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="video-slider-container mx-auto mt-6 w-full max-w-3xl">
      <Slider {...settings}>
        {videoPaths.map((video, index) => (
          <div key={index} className="flex justify-center px-4">
            <video
              className="mx-auto h-auto w-auto rounded-lg w480:max-h-[400px]"
              controls
              preload="metadata"
              poster={video.poster}
              onPlay={() => setActiveVideoIndex(index)} // Set active video on play
              onEnded={() => setActiveVideoIndex(null)} // Clear active video on end
              ref={(videoElement) => {
                if (videoElement && activeVideoIndex !== index) {
                  videoElement.pause(); // Pause non-active videos
                }
              }}
            >
              <source src={video.path} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default VideoSlider;
