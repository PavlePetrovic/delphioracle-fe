import MobileMainFooter from "../MobileMainFooter/MobileMainFooter";
import { useAppSelector } from "../../../redux/reduxTypes";
import delphiLogo from "../../../assets/icons/delphi-logo-horizontal-text-only.png";
import { NavLink, useNavigate } from "react-router-dom";

const MainFooter = ({ isMobile }: { isMobile?: boolean }) => {
  const navigate = useNavigate();
  const authData = useAppSelector((state) => state.authentication.authData);

  const navLinks: Array<{
    text: string;
    end?: boolean;
    route: string;
  }> = [
    {
      text: "Who Are We",
      route: "/who-are-we",
    },
    {
      text: "Privacy",
      end: true,
      route: "/privacy-policy",
    },
    {
      text: "Terms",
      route: "/terms-of-use",
    },
    {
      text: "How It Works",
      route: "/how-it-works",
    },
    {
      text: "FAQ",
      route: "/faq",
    },
    {
      text: "Reflections",
      route: "/community-reflections",
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 z-10 flex justify-center w-full px-5 w888:px-2">
      {!isMobile ? (
        <div className="flex items-center max-w-[1440px] w-full pb-3.5">
          <div
            className="flex mr-10 mt-1 cursor-pointer"
            onClick={() =>
              authData
                ? navigate("/chat-box")
                : navigate("/user-info-public/welcome")
            }
          >
            <img
              src={delphiLogo}
              className="w-auto h-[16px]"
              alt="delphi-logo-footer"
            />
          </div>

          <div className="flex items-center gap-4 text-xs text-dimmed-text-gray mr-auto font-extralight">
            {navLinks.map((navLink, index) => {
              return (
                <NavLink
                  key={index}
                  to={navLink.route}
                  end={navLink.end ? true : false}
                  className={`hover:text-white transition-all`}
                >
                  {({ isActive }) => (
                    <div
                      className={`hover:text-white transition-all ${
                        isActive ? "text-white" : ""
                      }`}
                    >
                      {navLink.text}
                    </div>
                  )}
                </NavLink>
              );
            })}
          </div>

          <p className="text-xs text-dimmed-text-gray">2025 Delphi Oracle </p>
        </div>
      ) : (
        <>
          {!authData && !window.location.pathname.includes("chat-box") ? (
            <div className="flex items-center justify-center gap-5 w-full py-4 mb-[7.5px] bg-transparent rounded-xl">
              {navLinks.map((navLink, index) => {
                return (
                  <NavLink
                    key={index}
                    to={navLink.route}
                    end={navLink.end ? true : false}
                  >
                    <p className="text-xs text-dimmed-text-gray">
                      {navLink.text}
                    </p>
                  </NavLink>
                );
              })}
            </div>
          ) : (
            <MobileMainFooter />
          )}
        </>
      )}
    </div>
  );
};

export default MainFooter;
