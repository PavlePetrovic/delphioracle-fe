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
    <div className="h-svh w-full overflow-y-hidden bg-wallpaper bg-cover bg-no-repeat object-cover">
      <Galaxy>
        <MainNavbar />

        <div className="fixed left-0 top-0 z-10 flex h-full w-full flex-col items-center justify-center bg-transparent px-5 pb-[49px] pt-[57px] w888:px-2 w888:pb-[63px] w888:pt-[45px]">
          <div
            className={`relative z-50 m-[18px] flex h-full min-h-full w-full max-w-[1440px] flex-col items-center rounded-xl bg-transparent p-5 w888:my-0 w888:p-1`}
          >
            {children}
          </div>
        </div>

        {!isMobile && (
          <div className="spin-animation fixed -bottom-[365px] -right-[365px] rounded-full opacity-55">
            <img
              src={astroChart}
              alt="astro-chart"
              className="h-auto w-[1000px] w1024:w-[900px]"
            />
          </div>
        )}

        <div id="modal-box"></div>
        <MainFooter isMobile={isMobile} />
      </Galaxy>
    </div>
  );
};

export default AppFramelessLayout;
