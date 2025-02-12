import { useAppSelector } from "@/redux/reduxTypes";
import { ReactNode } from "react";

const Galaxy = ({ children }: { children: ReactNode | JSX.Element }) => {
  const isMobile = useAppSelector((state) => state.global.isMobile);

  const generateStars = (count: number) => {
    const stars = [];
    for (let i = 0; i < count; i++) {
      const size = Math.random() * 1 + 1; // Star size between 1px and 2px
      const top = Math.random() * 100; // Random top position (0-100%)
      const left = Math.random() * 100; // Random left position (0-100%)
      const opacity = Math.random() * 0.8 + 0.2; // Random opacity (0.2-1)

      stars.push(
        <div
          key={i}
          className="star"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            top: `${top}%`,
            left: `${left}%`,
            opacity,
          }}
        />,
      );
    }
    return stars;
  };

  return (
    <div className="fade-in-animation starry-background">
      {generateStars(isMobile ? 80 : 200)}
      {children}
    </div>
  );
};

export default Galaxy;
