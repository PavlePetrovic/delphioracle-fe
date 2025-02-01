import AskIco from "../../../assets/icons/ask-ico.svg";
import ChatIco from "../../../assets/icons/chat-ico.svg";
import SynastryChatIco from "../../../assets/icons/synastry-chat-ico.svg";
import Button from "../Button/Button";
import { useAppSelector } from "../../../redux/reduxTypes";
import ZodiacSymbol from "../ZodiacSymbol/ZodiacSymbol";
import { NavLink } from "react-router-dom";

const MobileMainFooter = () => {
  const userData = useAppSelector(
    (state) => state.chat.chatData.value?.account_info,
  );
  const authData = useAppSelector((state) => state.authentication.authData);

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
      Icon: AskIco,
    },
    {
      text: "Chat",
      route: !authData ? "/chat-box-public" : "/chat-box",
      Icon: ChatIco,
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
    <div className="bg-transparent-gray bg-glass mb-[7px] flex w-full items-center justify-center gap-5 rounded-xl py-1.5">
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
                    navLink.Icon ? (
                      <navLink.Icon
                        className={`h-[22px] w-[22px] ${
                          isActive || navLink.isLinkActive
                            ? "[&_path]:stroke-gold"
                            : ""
                        }`}
                      />
                    ) : (
                      <ZodiacSymbol
                        zodiac={`${userData?.report?.profile_stats?.sun}`}
                        className={`h-auto w-[20px] ${
                          isActive || navLink.isLinkActive
                            ? "[&_path]:fill-gold"
                            : ""
                        }`}
                      />
                    )
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
