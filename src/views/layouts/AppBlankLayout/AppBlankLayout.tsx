import { ReactNode } from "react";
import astroChart from "@assets/images/astro-chart.png";

interface AppBlankLayoutProps {
  children: ReactNode;
}

const AppBlankLayout = ({ children }: AppBlankLayoutProps) => {
  return (
    <div className="app-blank-layout h-svh w-full overflow-y-hidden bg-wallpaper bg-cover bg-no-repeat object-cover">
      <div className="fixed left-0 top-0 z-10 flex h-full w-full flex-col items-center justify-center bg-transparent px-5 pb-[49px] pt-[57px] w888:px-2 w888:pb-[63px] w888:pt-[45px]">
        {children}
      </div>

      <div className="spin-animation fixed -bottom-36 -right-36 rounded-full opacity-100 w888:-bottom-32 w888:-right-44">
        <img
          src={astroChart}
          alt="astro-chart"
          className="w888:h-[400px] w888:w-[400px]"
        />
      </div>
    </div>
  );
};

export default AppBlankLayout;
