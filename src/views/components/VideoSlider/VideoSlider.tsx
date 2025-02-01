import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import posterImg from "@assets/images/astro-chart.png";

// Props for VideoSlider
interface VideoSliderProps {
  videoPaths: string[]; // Array of video paths
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
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="video-slider-container mx-auto mt-6 w-full max-w-3xl">
      <Slider {...settings}>
        {videoPaths.map((path, index) => (
          <div key={index} className="flex justify-center px-4">
            <video
              className="h-auto w-auto rounded-lg"
              controls
              preload="metadata"
              // poster={posterImg}
              onPlay={() => setActiveVideoIndex(index)} // Set active video on play
              onEnded={() => setActiveVideoIndex(null)} // Clear active video on end
              ref={(videoElement) => {
                if (videoElement && activeVideoIndex !== index) {
                  videoElement.pause(); // Pause non-active videos
                }
              }}
            >
              <source src={path} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default VideoSlider;
