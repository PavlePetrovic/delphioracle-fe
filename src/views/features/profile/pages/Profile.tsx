import ProfileBasicInfo from "../components/ProfileBasicInfo";
import ProfileNavigation from "../components/ProfileNavigation";
import ScrollWrapper from "@components/ScrollWrapper/ScrollWrapper";
import { Outlet } from "react-router";

const Profile = () => {
  return (
    <div className="flex h-full w-full flex-col gap-2.5">
      <ScrollWrapper
        id="scrollProfile"
        className="w888:flex-col w888:w-full flex h-full w-full items-start justify-center"
      >
        <div className="w888:w-full flex h-full w-[31%] flex-col gap-3.5">
          <ProfileBasicInfo />
          <ProfileNavigation />
          <div className="w888:flex hidden w-full flex-col gap-2 text-white">
            <Outlet />
            {/* <ProfileDetailedInfo /> */}
          </div>
        </div>
        <div className="w888:hidden flex h-full w-[69%] flex-col items-center justify-center text-white">
          {/* <ProfileDetailedInfo /> */}
          <Outlet />
        </div>
      </ScrollWrapper>
    </div>
  );
};

export default Profile;
