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
import CreditsModal from "../CreditsModal/CreditsModal";
import Spinner from "../Spinner/Spinner";

const NavbarLinks = () => {
  const authData = useAppSelector((state) => state.authentication.authData);
  const credits = useAppSelector(
    (state) => state.authentication.internalAuthData.value?.credits,
  );
  const userData = useAppSelector(
    (state) => state.authentication.internalAuthData.value?.account_info,
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
      <div className="flex items-center justify-center gap-2.5 w888:hidden">
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
        {!authData && window.location.pathname.includes("chat-box") ? (
          <div className="h-[20px] w-[2px] rounded-full bg-main-grey"></div>
        ) : (
          <></>
        )}
        {!authData && !window.location.pathname.includes("chat-box") ? (
          <></>
        ) : (
          <div
            className={`flex items-center gap-1 rounded-full bg-main-grey px-1 py-[3px] ${
              !authData ? "mr-2.5" : ""
            }`}
            onClick={() => authData && setCreditsModal(true)}
          >
            <button
              className={`flex items-center justify-center gap-1 rounded-full bg-[#E0EFFF1F] px-3 py-[1px] font-light text-gold`}
              onClick={() => null}
            >
              <CreditsIco className="h-auto w-[13px] [&_path]:fill-gold" />
              {credits || credits === 0 ? (
                <span className="text-gold">{credits}</span>
              ) : (
                <Spinner classList="w-[14px] h-[14px] my-1" />
              )}
            </button>
            {authData && (
              <button
                className={`flex items-center justify-center rounded-full bg-[#E0EFFF1F] p-[5px] font-light`}
                onClick={() => {}}
              >
                <AddIco className="h-auto w-[16px] [&_path]:fill-gold" />
              </button>
            )}
          </div>
        )}
      </div>

      {!authData && !window.location.pathname.includes("chat-box") ? (
        <></>
      ) : (
        <div
          className={`hidden items-center gap-1 rounded-full bg-main-grey py-0.5 ${
            !authData ? "mr-1.5" : ""
          } px-1 w888:flex `}
          onClick={() => authData && setCreditsModal(true)}
        >
          <button
            className={`flex items-center justify-center gap-1 rounded-full bg-[#E0EFFF1F] py-[3px] pl-2 pr-2.5 text-sm font-light text-gold`}
            onClick={() => null}
          >
            <CreditsIco className="h-auto w-[14px] [&_path]:fill-gold" />
            {credits || credits === 0 ? (
              <span className="text-xs text-gold">{credits}</span>
            ) : (
              <Spinner classList="w-[14px] h-[14px] my-1" />
            )}
          </button>
          {authData && (
            <button
              className={`flex items-center justify-center rounded-full bg-[#E0EFFF1F] p-[5px] font-light`}
              onClick={() => {}}
            >
              <AddIco className="h-auto w-[16px] [&_path]:fill-gold" />
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
