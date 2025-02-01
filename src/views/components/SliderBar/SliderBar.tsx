import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; // Slick styles
import "slick-carousel/slick/slick-theme.css";

// Define the type for slider items
interface SliderItem {
  message: string;
  author: string;
}

// Define props for the SliderBar component
interface SliderBarProps {
  items: SliderItem[];
}

const SliderBar: React.FC<SliderBarProps> = ({ items }) => {
  // State to track the active slide
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    afterChange: (index: number) => {
      setActiveIndex(index); // Update the active index
    },
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
    <div className="slider-container relative mx-auto mt-6 w-full max-w-3xl">
      <Slider {...settings} className="w-full">
        {items.map((item, index) => (
          <div key={index} className="px-2">
            <div
              className={`w-full rounded-lg border p-4 text-white shadow-lg transition-colors duration-300 
                ${activeIndex === index ? "border-gold" : "border-gray-500"}`}
            >
              <p className="mt-2 font-philosopher text-gold">{item.message}</p>
              <p className="text-right text-sm font-light">- {item.author}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderBar;
