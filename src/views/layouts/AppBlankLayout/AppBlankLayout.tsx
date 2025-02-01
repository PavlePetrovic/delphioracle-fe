import { ReactNode } from "react";
import astroChart from "@assets/images/astro-chart.png";

interface AppBlankLayoutProps {
  children: ReactNode;
}

const AppBlankLayout = ({ children }: AppBlankLayoutProps) => {
  return (
    <div className="app-blank-layout bg-wallpaper fade-in-animation h-svh w-full overflow-y-hidden bg-cover bg-no-repeat object-cover">
      <div className="w888:px-2 w888:pt-[45px] w888:pb-[63px] fixed top-0 left-0 z-10 flex h-full w-full flex-col items-center justify-center bg-transparent px-5 pt-[57px] pb-[49px]">
        {children}
      </div>

      <div className="spin-animation w888:-bottom-32 w888:-right-44 fixed -right-36 -bottom-36 rounded-full opacity-100">
        <img
          src={astroChart}
          alt="astro-chart"
          className="w888:w-[400px] w888:h-[400px]"
        />
      </div>
    </div>
  );
};

export default AppBlankLayout;
