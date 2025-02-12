import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import { setIsMobile } from "./redux/global";
import { useAppDispatch } from "./redux/reduxTypes";
import { useIsMobile } from "@common/hooks/useIsMobile";
import { setAuth } from "@features/auth/reducer/authentication.reducer";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebaseConfig/firebaseConfig";
import "./App.css";
import { getInternalAuthData } from "./views/features/auth/reducer/authentication.actions";
import * as Sentry from "@sentry/react";

function App() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isMobile = useIsMobile();

  useEffect(() => {
    dispatch(setIsMobile(isMobile));
    Sentry.setTag("Device", `${isMobile ? "Mobile" : "Desktop"}`);
  }, [isMobile]);

  useEffect(() => {
    const delphiAccessToken = localStorage.getItem("delphiAccessToken");

    const checkAuth = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser && delphiAccessToken) {
        dispatch(setAuth(currentUser));
        currentUser?.uid && console.log("App.tsx -> getInternalAuthData 1");
        currentUser?.uid &&
          dispatch(
            getInternalAuthData({
              user_id: `${currentUser?.uid}`,
            }),
          );

        Sentry.setUser({
          id: currentUser?.uid, // User ID from your auth system
          email: currentUser?.email ? currentUser?.email : "no-email",
        });

        window.location.pathname === "/" && navigate("/chat-box");
      } else {
        const lsPublicUserId = sessionStorage.getItem("userId");
        const lsDelphiUserExist = JSON.parse(
          `${localStorage.getItem("delphiOracleUser")}`,
        );

        if (lsPublicUserId) {
          Sentry.setUser({
            id: lsPublicUserId, // User ID from your auth system
            email: "public-user",
          });
          if (!window.location.pathname.includes("auth")) {
            console.log("App.tsx -> getInternalAuthData 2");
            dispatch(getInternalAuthData({ user_id: lsPublicUserId }));
            navigate("/chat-box-public");
          }
        } else {
          if (window.location.pathname.includes("verification")) return;

          lsDelphiUserExist
            ? navigate("/auth/login")
            : !window.location.pathname.includes("auth") &&
              navigate("/user-info-public/welcome");
        }
      }
    });
    return () => {
      checkAuth();
    };
  }, []);

  return (
    <div
      id="appMainDiv"
      className="bg-wallpaper bg-cover bg-no-repeat object-cover"
    >
      <Outlet />
    </div>
  );
}

export default App;
