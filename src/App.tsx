import { useIsMobile } from "./common/hooks/useIsMobile";
import { setIsMobile } from "./redux/global";
import "./App.css";
import { useEffect, useState } from "react";
import { useAppDispatch } from "./redux/reduxTypes";
import { onAuthStateChanged, User } from "firebase/auth";
import { setAuth } from "@features/auth/reducer/authentication.reducer";
import { getUserData } from "@features/chatBox/reducer/chatBox.actions";
import { auth } from "./firebaseConfig/firebaseConfig";
import { Outlet, useNavigate } from "react-router";
import ModalWithContent from "@components/ModalStandard/ModalStandard";

function App() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isMobile = useIsMobile();

  const [emailVerified, setIsEmailVerified] = useState<{
    verified: boolean;
    user: User | null;
  }>({ verified: true, user: null });

  const checkVerificationStatus = async () => {
    // if (emailVerified?.user) {
    //   await reload(emailVerified?.user);
    // }
    window.location.reload();
  };

  useEffect(() => {
    dispatch(setIsMobile(isMobile));
  }, [isMobile]);

  useEffect(() => {
    const delphiAccessToken = localStorage.getItem("delphiAccessToken");

    const checkAuth = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser && delphiAccessToken) {
        dispatch(setAuth(currentUser));
        setIsEmailVerified({
          verified: currentUser?.emailVerified,
          user: currentUser,
        });
        currentUser?.uid &&
          dispatch(
            getUserData({
              user_id: `${currentUser?.uid}`,
            }),
          );
        window.location.pathname === "/" && navigate("/chat-box");
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
      {!emailVerified?.verified && (
        <ModalWithContent
          close={() => null}
          modalClassName="w-[400px] h-fit"
          title="Check Email Inbox"
          hideCloseButton
          hideCloseIco
          actionButton={{
            text: "Verification Completed",
            onSubmit: checkVerificationStatus,
          }}
        >
          <p className="py-5 text-center text-base font-light text-white">
            In order to process the magical experience of our app, please
            confirm your email addres.
          </p>
        </ModalWithContent>
      )}
    </div>
  );
}

export default App;
