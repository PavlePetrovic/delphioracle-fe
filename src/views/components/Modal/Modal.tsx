import { ReactNode, useState } from "react";

const Modal = ({
  children,
  className,
  close,
}: {
  children: ReactNode;
  className?: string;
  close: () => void;
}) => {
  const [isMouseEnter, setIsMouseEnter] = useState(false);

  return (
    <div
      className="absolute top-0 left-0 flex items-center justify-center bg-glass w-full h-full z-[100] rounded-xl w888:rounded-none overflow-hidden"
      onClick={() => !isMouseEnter && close()}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`${
          className
            ? `${className} w-fit h-fit`
            : "w-[94%] h-[85%] max-h-max h900:h-[94%]"
        } max-w-[1440px] `}
        onMouseEnter={() => {
          setIsMouseEnter(true);
        }}
        onMouseLeave={() => {
          setIsMouseEnter(false);
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
