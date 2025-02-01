import { useState, type ReactNode } from "react";

type propsTypes = {
  id: string;
  className?: string;
  children: ReactNode;
  style?: {};
};

const ScrollWrapper = ({ id, className, children, style }: propsTypes) => {
  const [mouseEnter, setMouseEnter] = useState(false);
  const [isScrollable, setIsScrollable] = useState(false);

  const handleMouseEnter = () => {
    const scrollWrapper = document.getElementById(id);

    if (scrollWrapper) {
      scrollWrapper?.scrollHeight > scrollWrapper?.clientHeight &&
        setIsScrollable(true);

      setMouseEnter(true);
      const appMainDiv = document.getElementById("appMainDiv");
      appMainDiv?.classList.add("dark");
    }
  };

  const handleMouseLeave = () => {
    setMouseEnter(false);
    setIsScrollable(false);
    const appMainDiv = document.getElementById("appMainDiv");
    appMainDiv?.classList.remove("dark");
  };

  return (
    <div
      id={id}
      className={`custom-scroll-wrapper scrollbar-thumb-w-[5px] h-full overflow-y-scroll scrollbar scrollbar-track-transparent scrollbar-thumb-transparent scrollbar-track-rounded-full scrollbar-thumb-rounded-full ${
        mouseEnter && isScrollable
          ? "hover:scrollbar-thumb-[#e5e7ebb2] dark:scrollbar-thumb-[#e5e7ebb2]"
          : ""
      } ${className}`}
      style={{ ...style }}
      onMouseMoveCapture={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
};

export default ScrollWrapper;
