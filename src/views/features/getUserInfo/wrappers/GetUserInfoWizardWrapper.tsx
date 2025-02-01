import { ReactNode } from "react";
import { use100vh } from "react-div-100vh";

const GetUserInfoWizardWrapper = ({ children }: { children: ReactNode }) => {
  const customHeight = use100vh();

  return (
    <div
      className="w888:px-3 fixed top-0 left-0 z-10 flex h-screen w-full flex-col items-center justify-center bg-transparent px-5"
      style={{
        height: customHeight ? customHeight : "100vh",
        maxHeight: customHeight ? customHeight : "100vh",
      }}
    >
      <div
        className={`bg-transparent-gray bg-glass fade-in-message-animation w888:w-full relative z-50 m-[18px] flex h-fit w-full max-w-[560px] flex-col gap-2 rounded-xl`}
      >
        {children}
      </div>
    </div>
  );
};

export default GetUserInfoWizardWrapper;
