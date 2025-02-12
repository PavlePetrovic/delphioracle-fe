import React, { ReactNode } from "react";

const BoxModal = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-glass absolute left-0 top-0 z-[100] flex h-svh w-full items-center justify-center rounded-xl w888:rounded-none">
      <div className="h-[94%] w-[94%]">{children}</div>
    </div>
  );
};

export default BoxModal;
