import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import { setIsMobile } from "./redux/global";
import { useAppDispatch } from "./redux/reduxTypes";
import { useIsMobile } from "@common/hooks/useIsMobile";
import { setAuth } from "@features/auth/reducer/authentication.reducer";
import { getUserData } from "@features/chatBox/reducer/chatBox.actions";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebaseConfig/firebaseConfig";
import "./App.css";

function App() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isMobile = useIsMobile();

  useEffect(() => {
    dispatch(setIsMobile(isMobile));
  }, [isMobile]);

  useEffect(() => {
    const delphiAccessToken = localStorage.getItem("delphiAccessToken");

    const checkAuth = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser && delphiAccessToken) {
        dispatch(setAuth(currentUser));
        currentUser?.uid &&
          dispatch(
            getUserData({
              user_id: `${currentUser?.uid}`,
            }),
          );

        !currentUser?.emailVerified
          ? navigate("/verification")
          : window.location.pathname === "/" && navigate("/chat-box");
      } else {
        const lsPublicUserId = sessionStorage.getItem("userId");
        const lsDelphiUserExist = JSON.parse(
          `${localStorage.getItem("delphiOracleUser")}`,
        );

        if (lsPublicUserId) {
          if (!window.location.pathname.includes("auth")) {
            dispatch(getUserData({ user_id: lsPublicUserId }));
            navigate("/chat-box-public");
          }
        } else {
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
