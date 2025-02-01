import { useAppSelector } from "../../../redux/reduxTypes";
import Button from "../Button/Button";
import AskIco from "../../../assets/icons/ask-ico.svg";
import ChatIco from "../../../assets/icons/chat-ico.svg";
import SynastryChatIco from "../../../assets/icons/synastry-chat-ico.svg";
import CreditsIco from "../../../assets/icons/credits-ico.svg";
import AddIco from "../../../assets/icons/add-ico.svg";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import ZodiacSymbol from "../ZodiacSymbol/ZodiacSymbol";
import CreatePortal from "../CreatePortal/CreatePortal";
import Modal from "../Modal/Modal";
import CreditsModal from "../CreditsModal/CreditsModal";

const NavbarLinks = () => {
  const authData = useAppSelector((state) => state.authentication.authData);
  const userData = useAppSelector(
    (state) => state.chat.chatData.value?.account_info,
  );

  const [creditsModal, setCreditsModal] = useState(false);

  const navLinks: Array<{
    text: string;
    end?: boolean;
    route: string;
    hide?: boolean;
    Icon?: React.FunctionComponent<
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
      hide: !authData && !window.location.pathname.includes("chat-box"),
      Icon: AskIco,
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

  return (
    <>
      <div className="w888:hidden flex items-center justify-center gap-2.5">
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
                    type="main"
                    text={navLink.text}
                    CustomIco={
                      navLink.Icon ? (
                        <navLink.Icon
                          className={`h-auto w-[18px] ${
                            isActive || navLink.isLinkActive
                              ? "[&_path]:stroke-gold"
                              : ""
                          }`}
                        />
                      ) : (
                        <ZodiacSymbol
                          zodiac={`${userData?.report?.profile_stats?.sun}`}
                          className={`h-auto w-[18px] ${
                            isActive || navLink.isLinkActive
                              ? "[&_path]:fill-gold"
                              : ""
                          }`}
                        />
                      )
                    }
                    className={`flex-row-reverse gap-2 !px-3.5 !py-[5px] text-sm font-light ${
                      isActive ? "" : ""
                    }`}
                    customStyle={
                      isActive || navLink.isLinkActive
                        ? {
                            border: "border border-gold",
                            text: "text-gold",
                          }
                        : undefined
                    }
                  />
                )}
              </NavLink>
            )
          );
        })}
        {!authData && !window.location.pathname.includes("chat-box") ? (
          <div className="bg-transparent-gray bg-glass h-[20px] w-[2px] rounded-full"></div>
        ) : (
          <></>
        )}
        {!authData && !window.location.pathname.includes("chat-box") ? (
          <></>
        ) : (
          <div
            className={`bg-transparent-gray bg-glass flex items-center gap-1 rounded-full px-1 py-[3px] ${
              !authData ? "mr-2.5" : ""
            }`}
            onClick={() => authData && setCreditsModal(true)}
          >
            <button
              className={`text-gold flex items-center justify-center gap-1 rounded-full bg-[#E0EFFF1F] px-3 py-[1px] font-light`}
              onClick={() => null}
            >
              <CreditsIco className="[&_path]:fill-gold h-auto w-[13px]" />
              {userData?.credits && (
                <span className="text-gold">{`${
                  userData?.credits ? userData?.credits : 0
                }`}</span>
              )}
            </button>
            {authData && (
              <button
                className={`flex items-center justify-center rounded-full bg-[#E0EFFF1F] p-[5px] font-light`}
                onClick={() => {}}
              >
                <AddIco className="[&_path]:fill-gold h-auto w-[16px]" />
              </button>
            )}
          </div>
        )}
      </div>

      {!authData && !window.location.pathname.includes("chat-box") ? (
        <></>
      ) : (
        <div
          className={`bg-transparent-gray bg-glass hidden items-center gap-1 rounded-full py-0.5 ${
            !authData ? "mr-1.5" : ""
          } w888:flex px-1 `}
          onClick={() => authData && setCreditsModal(true)}
        >
          <button
            className={`text-gold flex items-center justify-center gap-1 rounded-full bg-[#E0EFFF1F] py-[3px] pr-2.5 pl-2 text-sm font-light`}
            onClick={() => null}
          >
            <CreditsIco className="[&_path]:fill-gold h-auto w-[14px]" />
            {userData?.credits && (
              <span className="text-gold text-xs">{`${
                userData?.credits ? userData?.credits : 0
              }`}</span>
            )}
          </button>
          {authData && (
            <button
              className={`flex items-center justify-center rounded-full bg-[#E0EFFF1F] p-[5px] font-light`}
              onClick={() => {}}
            >
              <AddIco className="[&_path]:fill-gold h-auto w-[16px]" />
            </button>
          )}
        </div>
      )}

      {creditsModal && (
        <CreditsModal closeModal={() => setCreditsModal(false)} />
      )}
    </>
  );
};

export default NavbarLinks;
