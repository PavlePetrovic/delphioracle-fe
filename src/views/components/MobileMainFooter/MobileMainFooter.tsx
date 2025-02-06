import AskIco from "@assets/icons/ask-ico.svg";
import ChatIco from "@assets/icons/chat-ico.svg";
import SynastryChatIco from "@assets/icons/synastry-chat-ico.svg";
import { useAppSelector } from "@redux/reduxTypes";
import Button from "../Button/Button";
import { CgProfile } from "react-icons/cg";
import { NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { useRef, useState } from "react";
import { useOutsideClickHandler } from "@common/hooks/useOutsideClickHandler";
import { IoArrowForwardOutline } from "react-icons/io5";
import CreatePortal from "../CreatePortal/CreatePortal";
import BoxModal from "../BoxModal/BoxModal";

const MobileMainFooter = () => {
  const menuRef = useRef<HTMLDivElement>(null);
  const authData = useAppSelector((state) => state.authentication.authData);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useOutsideClickHandler(menuRef, () => setIsMenuOpen(false));

  const navLinks: Array<{
    text: string;
    end?: boolean;
    route: string;
    hide?: boolean;
    Icon: React.FunctionComponent<
      React.SVGProps<SVGSVGElement> & {
        title?: string | undefined;
      }
    >;
    isLinkActive?: boolean;
  }> = [
    {
      text: "Ask",
      end: true,
      route: !authData ? "/chat-box-questions-public" : "/chat-box-questions",
      Icon: AskIco,
      hide: !authData && !window.location.pathname.includes("chat-box"),
    },
    {
      text: "Chat",
      route: !authData ? "/chat-box-public" : "/chat-box",
      Icon: ChatIco,
      hide: !authData && !window.location.pathname.includes("chat-box"),
    },
    {
      text: "Profile",
      route: "/profile",
      Icon: CgProfile,
      hide: !authData,
    },
    {
      text: "Synastry",
      route: "/synastry/landing",
      Icon: SynastryChatIco,
      hide: !authData,
      isLinkActive: window.location.pathname.includes("synastry"),
    },
  ];

  const legalNavLinks: Array<{
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
    <div className="bg-main-gray mb-[7px] flex w-full items-center justify-center gap-5 rounded-xl py-1.5">
      <div className="relative" onClick={(e) => e.stopPropagation()}>
        {isMenuOpen && (
          <CreatePortal>
            <BoxModal>
              <div
                ref={menuRef}
                className="slide-in-bottom absolute bottom-0 left-0 h-full w-full px-10 py-[74px]"
              >
                <div className="mx-auto flex h-full w-full flex-col items-center justify-between rounded-xl border border-gold bg-[#3d4653] py-5">
                  <h3 className="font-philosopher text-2xl text-gold">Menu</h3>
                  <div className="flex flex-col items-center gap-1.5">
                    {legalNavLinks.map((navLink, index) => {
                      return (
                        <NavLink
                          key={index}
                          to={navLink.route}
                          end={navLink.end ? true : false}
                          className={``}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {({ isActive }) => (
                            <div
                              className={`flex min-w-full items-center gap-1.5 whitespace-nowrap py-1 text-sm font-light ${
                                isActive ? "text-gold" : "text-white"
                              }`}
                            >
                              {navLink.text}{" "}
                              <IoArrowForwardOutline className="mt-[1px] text-[13px]" />
                            </div>
                          )}
                        </NavLink>
                      );
                    })}
                  </div>
                  <Button
                    text="Close"
                    onClick={() => setIsMenuOpen(false)}
                    type="goldMain"
                    className="mt-5 w-1/2"
                  />
                </div>
              </div>
            </BoxModal>
          </CreatePortal>
        )}
        <Button
          type="border"
          onClick={() => setIsMenuOpen((prevState) => !prevState)}
          text={""}
          CustomIco={<IoMenu className="h-[22px] w-[22px]" />}
          className="flex-row-reverse border border-[#ffffff4e] bg-[#0D101A] !p-[7px]"
        />
      </div>
      {navLinks.map((navLink, index) => {
        return (
          !navLink.hide && (
            <NavLink
              key={index}
              to={navLink.route}
              end={navLink.end ? true : false}
            >
              {({ isActive }) => (
                <Button
                  type="border"
                  text={""}
                  CustomIco={
                    <navLink.Icon
                      className={`h-[22px] w-[22px] ${
                        isActive || navLink.isLinkActive
                          ? "[&_path]:stroke-gold"
                          : ""
                      }`}
                    />
                  }
                  className="flex-row-reverse border border-[#ffffff4e] bg-[#0D101A] !p-[7px]"
                  customStyle={
                    isActive || navLink.isLinkActive
                      ? {
                          border: "border border-gold",
                          text: "text-gold font-medium",
                        }
                      : undefined
                  }
                />
              )}
            </NavLink>
          )
        );
      })}
    </div>
  );
};

export default MobileMainFooter;
