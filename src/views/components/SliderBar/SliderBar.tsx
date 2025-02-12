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
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    afterChange: (index: number) => {
      setActiveIndex(index); // Update the active index
    },
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 612,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container relative mx-auto mt-6 w-[95%] w1200:w-[92%] w888:w-[85%]">
      <Slider {...settings} className="w-full">
        {items.map((item, index) => (
          <div key={index} className="px-2">
            <div
              className={`flex h-[180px] flex-col justify-between rounded-lg border bg-[#3d46536a] p-4 transition-colors duration-300 w1200:h-[215px] w888:h-[200px] w480:h-[220px]
                ${activeIndex + 1 === index ? "border-gold" : "border-main-grey"}`}
            >
              <p className="self-start text-left text-base font-light italic text-white">
                <span className="text-gold">"</span>
                {item.message}
                <span className="text-gold">"</span>
              </p>
              <p className="self-end text-right font-philosopher text-sm italic text-gold">
                {item.author}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderBar;
