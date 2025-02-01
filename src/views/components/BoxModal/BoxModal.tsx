import React, { ReactNode } from "react";

const BoxModal = ({ children }: { children: ReactNode }) => {
  return (
    <div className="absolute top-0 left-0 flex items-center justify-center bg-glass w-full h-full z-[100] rounded-xl w888:rounded-none">
      <div className="w-[94%] h-[94%]">{children}</div>
    </div>
  );
};

export default BoxModal;
