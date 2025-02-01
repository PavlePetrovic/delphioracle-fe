import { type ReactNode } from "react";
import astroChart from "@assets/images/astro-chart.png";
import { useAppSelector } from "@redux/reduxTypes";
import MainNavbar from "@components/MainNavbar/MainNavbar";
import MainFooter from "@components/MainFooter/MainFooter";
import Galaxy from "@components/Galaxy/Galaxy";

interface appLayoutType {
  children: ReactNode;
}

const AppFramelessLayout = ({ children }: appLayoutType) => {
  const isMobile = useAppSelector((state) => state.global.isMobile);

  return (
    <div className="bg-wallpaper fade-in-animation starry-background h-svh w-full overflow-y-hidden bg-cover bg-no-repeat object-cover">
      <MainNavbar />

      <Galaxy>
        <div className="w888:px-2 w888:pt-[45px] w888:pb-[63px] fixed top-0 left-0 z-10 flex h-full w-full flex-col items-center justify-center bg-transparent px-5 pt-[57px] pb-[49px]">
          <div
            className={`fade-in-message-animation w888:p-1 w888:my-0 relative z-50 m-[18px] flex h-full min-h-full max-w-[1440px] flex-col items-center rounded-xl bg-transparent p-5`}
          >
            {children}
          </div>
        </div>
      </Galaxy>

      {!isMobile && (
        <div className="spin-animation fixed -right-[365px] -bottom-[365px] rounded-full opacity-55">
          <img
            src={astroChart}
            alt="astro-chart"
            className="w1024:w-[900px] h-auto w-[1000px]"
          />
        </div>
      )}

      <div id="modal-box"></div>
      <MainFooter isMobile={isMobile} />
    </div>
  );
};

export default AppFramelessLayout;
