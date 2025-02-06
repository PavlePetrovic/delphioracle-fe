import { ReactNode } from "react";
import { use100vh } from "react-div-100vh";

const GetUserInfoWizardWrapper = ({ children }: { children: ReactNode }) => {
  const customHeight = use100vh();

  return (
    <div
      className="fixed left-0 top-0 z-10 flex h-svh w-full flex-col items-center justify-center bg-transparent px-5 w888:px-3"
      style={{
        height: customHeight ? customHeight : "100vh",
        maxHeight: customHeight ? customHeight : "100vh",
      }}
    >
      <div
        className={`bg-glass colors-transition-animation relative z-50 m-[18px] flex h-fit w-full max-w-[560px] flex-col gap-2 rounded-xl w888:w-full`}
      >
        {children}
      </div>
    </div>
  );
};

export default GetUserInfoWizardWrapper;
