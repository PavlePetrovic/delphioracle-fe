import { useEffect } from "react";
import ProfileBasicInfo from "../components/ProfileBasicInfo";
import ProfileNavigation from "../components/ProfileNavigation";
import ScrollWrapper from "@components/ScrollWrapper/ScrollWrapper";
import { Outlet } from "react-router";
import { useAppDispatch, useAppSelector } from "@/redux/reduxTypes";
import { getProfileData } from "../reducer/profile.actions";

const Profile = () => {
  const dispatch = useAppDispatch();
  const userId = useAppSelector(
    (state) => state.authentication.internalAuthData.value?.user_id,
  );

  useEffect(() => {
    userId && console.log("Profile.tsx -> getProfileData");
    userId && dispatch(getProfileData({ user_id: userId }));
  }, [userId]);

  return (
    <div className="flex h-full w-full flex-col gap-2.5">
      <ScrollWrapper
        id="scrollProfile"
        className="flex h-full w-full items-start justify-center w888:w-full w888:flex-col"
      >
        <div className="flex h-full w-[31%] flex-col gap-3.5 w888:w-full">
          <ProfileBasicInfo />
          <ProfileNavigation />
          <div className="hidden w-full flex-col gap-2 text-white w888:flex">
            <Outlet />
            {/* <ProfileDetailedInfo /> */}
          </div>
        </div>
        <div className="flex h-full w-[69%] flex-col items-center justify-center text-white w888:hidden">
          {/* <ProfileDetailedInfo /> */}
          <Outlet />
        </div>
      </ScrollWrapper>
    </div>
  );
};

export default Profile;
