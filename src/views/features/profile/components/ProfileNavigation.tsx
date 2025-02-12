import { NavLink } from "react-router-dom";

const ProfileNavigation = () => {
  const navLinks: Array<{
    text: string;
    end?: boolean;
    route: string;
    hide?: boolean;
  }> = [
    {
      text: "About You",
      route: "/profile",
      end: true,
    },
    {
      text: "Settings",
      route: "settings",
    },
    {
      text: "Support",
      route: "support",
    },
  ];

  return (
    <div className="flex w-full flex-col gap-2.5">
      {navLinks.map((navLink, index) => {
        return (
          <NavLink
            key={index}
            to={navLink.route}
            end={navLink.end ? true : false}
          >
            {({ isActive }) => (
              <div
                className={`flex items-start justify-start gap-2 rounded-full bg-main-grey px-5 py-1.5 font-light transition-all hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-65 w888:px-4 w888:py-[5px] w888:text-sm ${
                  isActive ? "border border-gold text-gold" : "text-white"
                }`}
              >
                {navLink.text}
              </div>
            )}
          </NavLink>
        );
      })}
    </div>
  );
};

export default ProfileNavigation;
