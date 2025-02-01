import { NavLink } from "react-router-dom";

const ProfileNavigation = () => {
  const navLinks: Array<{
    text: string;
    end?: boolean;
    route: string;
    hide?: boolean;
  }> = [
    {
      text: "Report",
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
    <div className="flex flex-col gap-2.5 w-full">
      {navLinks.map((navLink, index) => {
        return (
          <NavLink
            key={index}
            to={navLink.route}
            end={navLink.end ? true : false}
          >
            {({ isActive }) => (
              <div
                className={`flex items-start justify-start gap-2 bg-transparent-gray bg-glass rounded-full px-5 py-1.5 font-light w888:py-[5px] w888:px-4 w888:text-sm transition-all hover:opacity-80 disabled:opacity-65 disabled:cursor-not-allowed ${
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
