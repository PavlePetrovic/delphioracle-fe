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
      text: "How It Works",
      route: "/how-it-works",
    },
    {
      text: "Who Are We",
      route: "/who-are-we",
    },
    {
      text: "FAQ",
      route: "/faq",
    },
    {
      text: "Reflections",
      route: "/community-reflections",
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
  ];

  return (
    <div className="fixed bottom-0 left-0 z-10 flex w-full justify-center px-5 w888:px-2">
      {!isMobile ? (
        <div className="flex w-full max-w-[1440px] items-center pb-3.5">
          <div
            className="mr-10 mt-1 flex cursor-pointer"
            onClick={() =>
              authData
                ? navigate("/chat-box")
                : navigate("/user-info-public/welcome")
            }
          >
            <img
              src={delphiLogo}
              className="h-[16px] w-auto"
              alt="delphi-logo-footer"
            />
          </div>

          <div className="mr-auto flex items-center gap-4 text-xs font-extralight text-dimmed-text-gray">
            {navLinks.map((navLink, index) => {
              return (
                <NavLink
                  key={index}
                  to={navLink.route}
                  end={navLink.end ? true : false}
                  className={`transition-all hover:text-white`}
                >
                  {({ isActive }) => (
                    <div
                      className={`transition-all hover:text-white ${
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
        <MobileMainFooter />
      )}
    </div>
  );
};

export default MainFooter;
